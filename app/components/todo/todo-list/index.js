/* ----- todo/todo-list/index.js ----- */
import angular from 'angular';
import TodoListComponent from './todo-list.component';

export const TodoListModule = angular
  .module('todo.list', [])
  .component('todoList', TodoListComponent)
  .name;
  