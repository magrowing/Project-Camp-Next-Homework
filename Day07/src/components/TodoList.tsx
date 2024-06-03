import { TTodo } from '../pages/Todo';
import TodoItem from './TodoItem';

export default function TodoList({ todos }: { todos: TTodo[] }) {
  return (
    <ul className="flex flex-col items-center justify-center gap-[1.6rem]">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
