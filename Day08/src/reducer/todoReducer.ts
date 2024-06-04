import { TAction, TTodo } from '../type/todoType';

export const todoReducer = (todos: TTodo[], action: TAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [action.payload, ...todos];
    case 'TOGGLE_TODO':
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'EDIT_TODO':
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, task: action.payload.task }
          : todo
      );
    case 'DELETED_TODO':
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};
