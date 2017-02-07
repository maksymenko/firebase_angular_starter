import * as firebase from "firebase";

class CatalogService {

  /* @ngInject */
  constructor($q) {
    this.q_ = $q;
    this.deferredUser = $q.defer();
    this.deferredCatalog = $q.defer();
    const config = {
      "apiKey": "${firebase.apiKey}",
      "authDomain": "${firebase.authDomain}",
      "databaseURL": "${firebase.databaseURL}",
      "storageBucket": "${firebase.storageBucket}",
      "messagingSenderId": "${firebase.messagingSenderId}"
    };
    firebase.initializeApp(config);

    this.currentUser = null;
    this.auth = firebase.auth();
    this.auth.onAuthStateChanged(user => {
      this.currentUser = user;
      this.deferredUser.resolve(user);
    });

    this.db = firebase.database();

    this.catalog = {items: []};
    let catalogRef = this.db.ref('catalog');
    catalogRef.on('value', snapshot => {
      this.catalog.items = [];
      snapshot.forEach(item => {
        this.catalog.items.push({
          sku: item.val().sku,
          name: item.val().name,
          price: item.val().price
        });
        this.deferredCatalog.resolve(this.catalog);
      });
    });
  }

  login() {
    let provider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithRedirect(provider);
  }

  logout() {
    return this.auth.signOut();
  }

  getUser() {
    return this.deferredUser;
  }

  getCatalog() {
    return this.deferredCatalog;
  }

  addItem(item) {
    let newItemRef = this.db.ref().child('catalog').push();
    newItemRef.set(item);
  }
}

export default CatalogService;