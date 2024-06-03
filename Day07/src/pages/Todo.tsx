import { useState } from 'react';

import Title from '../components/Title';
import TodoEditor from '../components/TodoEditor';
import TodoList from '../components/TodoList';

import { v4 as uuidv4 } from 'uuid';

export type TTodo = {
  id: string;
  task: string;
  completed: boolean;
};

export default function Todo() {
  const [todos, setTodos] = useState<TTodo[]>([]);

  const addTodo = (task: string) => {
    setTodos((prev) => [{ id: uuidv4(), task, completed: false }, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <section className="section-wrapper">
      <div>
        <Title type="main">Todo List App</Title>
        <Title type="sub">Please enter your details to continue.</Title>
      </div>
      <TodoEditor addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </section>
  );
}
