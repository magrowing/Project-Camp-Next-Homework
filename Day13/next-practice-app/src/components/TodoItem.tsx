'use client';

import { useState } from 'react';

import {
  todoCheckUpdateAction,
  todoDeleteAction,
  todoTaskUpdateAction,
} from '@/libs/action';
import TextField from './TextField';

type TodoItemProps = {
  todo: { id: string; task: string; completed: boolean };
};

function TodoItem({ todo }: TodoItemProps) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState('');

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onUpdateClickHandler = () => {
    setEdit(!edit);

    if (edit) {
      if (text === todo.task) return;
      todoTaskUpdateAction(todo.id, text);
    } else {
      setText(todo.task);
    }
  };

  return (
    <li className="relative flex items-center w-[100%] px-[1.5rem] py-[1rem] border border-primary rounded-md bg-opacity5">
      {edit ? (
        <TextField
          style={'flex-1'}
          value={text}
          onChange={onInputChangeHandler}
        />
      ) : (
        <div className="relative flex items-center flex-1">
          <input
            type="checkbox"
            id={`todo-${todo.id}`}
            className={`appearance-none block w-[2.4rem] h-[2.4rem] border border-primary rounded-sm mr-[0.8rem] bg-white peer cursor-pointer`}
            checked={todo.completed}
            onChange={() => todoCheckUpdateAction(todo.id)}
          />
          <span
            className={`absolute top-[50%] left-[0.4rem] translate-y-[-50%] w-[1.6rem] h-[0.8rem] border-[0.3rem] border-black border-t-0 border-r-0 -rotate-45 origin-[25%_25%] mt-[0.2rem] hidden peer-checked:block`}
          ></span>
          <label
            htmlFor={`todo-${todo.id}`}
            className={`text-[1.4rem] text-secondary peer-checked:line-through cursor-pointer`}
          >
            {todo.task}
          </label>
        </div>
      )}
      <button
        type="button"
        className={`relative w-[2.4rem] h-[2.4rem] border border-primary text-[0] rounded-sm ml-4 bg-opacity10`}
        onClick={onUpdateClickHandler}
      >
        수정
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z"
            clipRule="evenodd"
            className="fill-primary"
          />
        </svg>
      </button>
      <button
        type="button"
        className={`relative w-[2.4rem] h-[2.4rem] border border-primary text-[0] rounded-sm ml-4 bg-opacity10`}
        onClick={() => todoDeleteAction(todo.id)}
      >
        삭제
        <span className={`icon-line -rotate-45`}></span>
        <span className={`icon-line rotate-45`}></span>
      </button>
    </li>
  );
}

export default TodoItem;
