import angular from 'angular';
import { CalendarModule }  from './calendar';
import TodoModule from './todo';

export const ComponentsModule = angular
  .module('app.components', [
    CalendarModule,
    TodoModule
  ])
  .name;