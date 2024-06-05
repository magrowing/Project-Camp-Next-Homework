import { useId } from 'react';

export default function TodoItem() {
  const uuid = useId();
  return (
    <li className="relative flex items-center w-[100%] px-[1.5rem] py-[1rem] border border-primary rounded-md bg-opacity5">
      <input
        type="checkbox"
        id={`todo-${uuid}`}
        className={`appearance-none block w-[2.4rem] h-[2.4rem] border border-primary rounded-sm mr-[0.8rem] bg-white peer cursor-pointer`}
      />
      <span
        className={`absolute top-[50%] left-[1.9rem] translate-y-[-50%] w-[1.6rem] h-[0.8rem] border-[0.3rem] border-black border-t-0 border-r-0 -rotate-45 origin-[25%_25%] mt-[0.2rem] hidden peer-checked:block`}
      ></span>
      <label
        htmlFor={`todo-${uuid}`}
        className={`text-[1.4rem] text-secondary peer-checked:line-through cursor-pointer`}
      >
        Your task here...
      </label>
      <button
        type="button"
        className={`relative w-[2.4rem] h-[2.4rem] border border-primary text-[0] rounded-sm ml-auto bg-opacity10`}
      >
        삭제
        <span className={`icon-line -rotate-45`}></span>
        <span className={`icon-line rotate-45`}></span>
      </button>
    </li>
  );
}
