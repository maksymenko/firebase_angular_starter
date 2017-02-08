import firebase from "firebase";
import angularfirebase from "angularfire";

class CatalogService {

  /* @ngInject */
  constructor($q, $firebaseAuth, $firebaseArray) {
    this.firebaseArray_ = $firebaseArray;
    this.catalog = {items: []};
    const config = {
      "apiKey": "${firebase.apiKey}",
      "authDomain": "${firebase.authDomain}",
      "databaseURL": "${firebase.databaseURL}",
      "storageBucket": "${firebase.storageBucket}",
      "messagingSenderId": "${firebase.messagingSenderId}"
    };
    firebase.initializeApp(config);

    this.auth = $firebaseAuth(firebase.auth());
    this.db = firebase.database();
  }

  getAuth() {
    return this.auth;
  }

  login() {
    let provider = new firebase.auth.GoogleAuthProvider();
    this.auth.$signInWithRedirect(provider);
  }

  logout() {
    this.auth.$signOut();
    this.catalog.items.$destroy();
  }

  getCatalog() {
    let catalogRef = this.db.ref().child('catalog');
    this.catalog.items = this.firebaseArray_(catalogRef);
    return this.catalog;
  }
}

export default CatalogService;