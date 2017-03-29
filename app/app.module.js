// Vendor
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// App
import { AppComponent } from './app.component';
import { ComponentsModule } from './components';
import { CommonModule } from './common';

export const AppModule = angular
    .module('app', [
        ComponentsModule,
        CommonModule,
        uiRouter
    ])
    .component('app', AppComponent)
    .name;
    