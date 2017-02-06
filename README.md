# Under construction

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
* Put firebase settings to configuratin json and rename:
```
cp ./src/config/properties.json.template -> ./src/config/properties.json 
```