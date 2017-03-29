import angular from 'angular';
import { NavModule } from './nav';
import { HeaderModule } from './header';
import { FooterModule } from './footer';

export const CommonModule = angular
  .module('app.common', [
    NavModule,
    HeaderModule,
    FooterModule
  ])
  .name;