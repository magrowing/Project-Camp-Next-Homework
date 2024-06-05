import TodoItem from './TodoItem';

export default function TodoList() {
  return (
    <ul className="flex flex-col items-center justify-center gap-[1.6rem]">
      <TodoItem />
    </ul>
  );
}
