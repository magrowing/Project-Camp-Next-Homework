import TodoListItem from './TodoListItem';

import { useStateContext } from '../context/todoContext';

const TodoList = () => {
  const todos = useStateContext();
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4">
        {todos &&
          todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)}
      </ul>
    </>
  );
};
export default TodoList;
