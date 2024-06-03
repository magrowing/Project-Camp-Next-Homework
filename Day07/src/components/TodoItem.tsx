import { TTodo } from '../pages/Todo';

type TodoItemProps = {
  todo: TTodo;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

export default function TodoItem(props: TodoItemProps) {
  const { todo, toggleTodo, removeTodo } = props;

  const onChangeHandler = () => {
    toggleTodo(todo.id);
  };

  const onClickHandler = () => {
    removeTodo(todo.id);
  };

  return (
    <li className="relative flex items-center w-[100%] px-[1.5rem] py-[1rem] border border-primary rounded-md bg-opacity5">
      <input
        type="checkbox"
        id={`${todo.id}`}
        checked={todo.completed}
        className={`appearance-none block w-[2.4rem] h-[2.4rem] border border-primary rounded-sm mr-[0.8rem] bg-white peer cursor-pointer`}
        onChange={onChangeHandler}
      />
      <span
        className={`absolute top-[50%] left-[1.9rem] translate-y-[-50%] w-[1.6rem] h-[0.8rem] border-[0.3rem] border-black border-t-0 border-r-0 -rotate-45 origin-[25%_25%] mt-[0.2rem] hidden peer-checked:block`}
      ></span>
      <label
        htmlFor={`${todo.id}`}
        className={`text-[1.4rem] text-secondary peer-checked:line-through cursor-pointer`}
      >
        {todo.task}
      </label>
      <button
        type="button"
        className={`relative w-[2.4rem] h-[2.4rem] border border-primary text-[0] rounded-sm ml-auto bg-opacity10`}
        onClick={onClickHandler}
      >
        삭제
        <span className={`icon-line -rotate-45`}></span>
        <span className={`icon-line rotate-45`}></span>
      </button>
    </li>
  );
}
