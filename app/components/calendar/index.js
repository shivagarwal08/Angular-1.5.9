import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { CalendarComponent } from './calendar.component';
import { CalendarNewModule } from './calendar-new';

export const CalendarModule = angular
  .module('calendar', [
    uiRouter,
    CalendarNewModule
  ])
  .component('calendar', CalendarComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('calendar', {
        url: '/calendar',
        component: 'calendar'
      })
      .state('calendar.new', {
        component: 'calendarnew'
      });  
    $urlRouterProvider.otherwise('/');
  })
  .name;