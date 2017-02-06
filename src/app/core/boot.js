import angular from 'angular';

import App from '../app.module';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {
    angular
      .module( 'appStarter', [ App ] )
      .run(() => {
        console.log('>>>> Running the application');
      });

    let body = document.getElementsByTagName("body")[0];
    var appElement = document.createElement("layout");
    body.appendChild(appElement);
    angular.bootstrap( body, [ 'appStarter' ], {
      strictDi: true
    });
});