/* eslint-disable react-refresh/only-export-components */
import { useState, memo } from 'react';

import Checkbox from './html/Checkbox';
import Input from './html/Input';

import { useDispatchContext } from '../context/todoContext';

import { TTodo } from '../type/todoType';

type TodoListItemProps = {
  todo: TTodo;
};

const TodoListItem = (props: TodoListItemProps) => {
  const { todo } = props;
  const dispatch = useDispatchContext();

  const [edit, setEdit] = useState(false);
  const [task, setTask] = useState('');

  const onCheckChangeHandler = () => {
    dispatch({ type: 'TOGGLE_TODO', payload: todo });
  };

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const onDeleteClickHandler = () => {
    dispatch({ type: 'DELETED_TODO', payload: todo });
  };

  const onEditClickHandler = () => {
    setEdit(!edit);

    if (!edit) {
      setTask(todo.task);
    } else {
      setTask(task);
      dispatch({ type: 'EDIT_TODO', payload: { ...todo, task } });
    }
  };

  return (
    <>
      <li className="flex justify-between items-center py-[10px] px-[15px] bg-[rgba(53,56,62,0.05)] border border-[#4f4f4f] rounded-[4px]">
        {edit ? (
          <Input
            value={task}
            onChange={onInputChangeHandler}
            style={'w-[75%]'}
          />
        ) : (
          <Checkbox checked={todo.completed} onChange={onCheckChangeHandler}>
            <span
              className={`${todo.completed && 'line-through'} text-[#35383E]`}
            >
              {todo.task}
            </span>
          </Checkbox>
        )}
        <button
          className="w-6 h-6 bg-[rgba(53,56,62,0.1)] border border-[#4F4F4F] rounded flex items-center justify-center ml-auto"
          onClick={onEditClickHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          className="w-6 h-6 bg-[rgba(53,56,62,0.1)] border border-[#4F4F4F] rounded flex items-center justify-center ml-[10px]"
          onClick={onDeleteClickHandler}
        >
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.50002 9.81827L12.9548 15.2731L14.7731 13.4548L9.31829 8L14.7731 2.54518L12.9548 0.726901L7.50002 6.18173L2.04519 0.726902L0.226918 2.54518L5.68174 8L0.226919 13.4548L2.04519 15.2731L7.50002 9.81827ZM7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
              fill="#4F4F4F"
            />
            <path
              d="M7.50002 9.81827L9.31829 8L7.50002 6.18173L5.68174 8L7.50002 9.81827Z"
              fill="#4F4F4F"
            />
          </svg>
        </button>
      </li>
    </>
  );
};
export default memo(TodoListItem);
