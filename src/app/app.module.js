import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import { CatalogModule } from './catalog/catalog.module';
import { LayoutModule } from './layout/layout.module';

export default angular.module('app', [
    ngMaterial,
    uiRouter,
    CatalogModule,
    LayoutModule
  ])
  .config(($urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/catalog');
  })
  .name;