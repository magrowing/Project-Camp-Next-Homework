export type TTodo = {
  id: string;
  task: string;
  completed: boolean;
};

export type TAction = {
  type: 'ADD_TODO' | 'TOGGLE_TODO' | 'DELETED_TODO' | 'EDIT_TODO';
  payload: TTodo;
};
