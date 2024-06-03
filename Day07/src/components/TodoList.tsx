import { TTodo } from '../pages/Todo';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: TTodo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

export default function TodoList(props: TodoListProps) {
  const { todos, toggleTodo, removeTodo } = props;
  return (
    <ul className="flex flex-col items-center justify-center gap-[1.6rem]">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}
