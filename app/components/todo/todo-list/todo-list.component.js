export const TodoListComponent = {
  bindings: {
    todos: '<',
  },
  template: `
    <pre>{{$ctrl.todos|json}}</pre>
  `
};
