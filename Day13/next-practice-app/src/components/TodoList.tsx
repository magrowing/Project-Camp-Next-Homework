import TodoItem from './TodoItem';

const getTodos = async () => {
  return await (await fetch('http://localhost:4000/todos')).json();
};

export default async function TodoList() {
  const todos = await getTodos();
  //console.log(todos);
  return (
    <ul className="flex flex-col items-center justify-center gap-[1.6rem]">
      {todos.map((todo: { id: string; task: string; completed: boolean }) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
