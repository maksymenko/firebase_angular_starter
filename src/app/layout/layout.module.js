import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import LayoutComponent from './layout.component';
import 'material-design-icons/iconfont/material-icons.css';
import './layout.css';

export const LayoutModule = angular
  .module('layoutModule', [
    ngMaterial,
    uiRouter
  ])
  .component(LayoutComponent.name, LayoutComponent.config)
  .name;