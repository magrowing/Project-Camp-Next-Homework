import TodoItem from './TodoItem';

import { useTodoStore } from '../store/todoStore';

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <ul className="flex flex-col items-center justify-center gap-[1.6rem]">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
