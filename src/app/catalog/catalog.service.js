import firebase from "firebase";
import angularfirebase from "angularfire";

class CatalogService {

  /* @ngInject */
  constructor($q, $firebaseArray) {
    this.q_ = $q;
    this.deferredUser = $q.defer();
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

    let catalogRef = this.db.ref().child('catalog');
    this.catalog = {items: $firebaseArray(catalogRef)};
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
    return this.catalog;
  }
}

export default CatalogService;