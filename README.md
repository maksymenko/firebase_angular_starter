# Firebase with AngularJS.

## Quick start
* Set Firebase configuration in `./src/config/properties.json`
```
$ npm install
$ npm run devserver
```

## Steps
### Initiate project
```
$ npm init
```

* Init development environment.
    * create webpack.config.js
    * add npm dependencies for webpack
    * add start scripts

* Add project run-time dependencies
```
$ npm install --save angular
$ npm install --save angular-ui-router
$ npm install --save angular-animate
$ npm install --save angular-aria
$ npm install --save angular-material
$ npm install --save material-design-icons
```
**Note: use  "angular-ui-router": "^1.0.0-beta.3"** or higher with angularJS 1.6

### Add Firebase
* Create project https://console.firebase.google.com/
    * click "Add Firebase to your web app" to copy settings
* Add `firebase` dependency
```
npm install --save firebase
```
* Put firebase settings to configuratin json and rename:
```
cp ./src/config/properties.json.template -> ./src/config/properties.json 
```
* Initialize `firebase`
```
import * as firebase from "firebase";
...
const config = {
      "apiKey": "${firebase.apiKey}",
      "authDomain": "${firebase.authDomain}",
      "databaseURL": "${firebase.databaseURL}",
      "storageBucket": "${firebase.storageBucket}",
      "messagingSenderId": "${firebase.messagingSenderId}"
    };
firebase.initializeApp(config);
```
#### Authentication
* Enable sign-in method in "Authentication" section
* Login
```
letvar provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithRedirect(provider);
```
* Logout
```
firebase.auth().signOut()
```
#### Listen data changes
* use `on()` or `once()`
```
firebase.database().ref('items').on('value', snapshot => {
  this.value = snapshot;
});
```
* Other events (observers)
    * child_added, child_changed, child_removed, child_moved
#### Write data
```
let nextItemRef = firebase.database().ref().child('items').push();
nextItemRef.set({
  sku: 'sku_1',
  name: 'item_1'
});
```

### 3-way binding with `angularfire`.
* Dependency
```
npm install -save angularfire
```
* Inject module
```
import angularfirebase from "angularfire";
...
 .module('myModule', [angularfirebase])
```
* Use $firebaseObject, $firebaseArray, or $firebaseAuth
```
  /* @ngInject */
  constructor($firebaseArray) {
    let catalogRef = this.db.ref().child('catalog');
    this.items = $firebaseArray(catalogRef);
  }
    ...
    this.items.$add(item);
    ...
    this.items.$remove(item);
```



* **References**
    * https://firebase.google.com/docs/
    * https://github.com/firebase/quickstart-java
    * https://www.firebase.com/docs/web/libraries/angular/api.html
    * https://github.com/firebase/angularfire
    * week-end course https://www.udacity.com/course/firebase-in-a-weekend-by-google-android--ud0352