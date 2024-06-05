/* eslint-disable @typescript-eslint/no-unused-vars */

import { create } from 'zustand';

import { Todo } from '../types';

import {
  getTodosData,
  postTodoData,
  patchTodoData,
  putTodoData,
  deleteTodoData,
} from '../api/todoApi';

type TodoStoreType = {
  todos: Todo[];
  getTodos: () => void;
  addTodo: (task: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, task: string) => void;
};

export const useTodoStore = create<TodoStoreType>((set) => ({
  todos: [],
  getTodos: async () => {
    const data = await getTodosData();
    set(() => ({ todos: data }));
  },
  addTodo: async (task) => {
    const data = await postTodoData(task);
    set((state) => ({ todos: [data, ...state.todos] }));
  },
  toggleTodo: async (id) => {
    await patchTodoData(id);
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
  removeTodo: async (id) => {
    await deleteTodoData(id);
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  updateTodo: async (id, task) => {
    await putTodoData(id, task);
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, task } : todo
      ),
    }));
  },
}));
