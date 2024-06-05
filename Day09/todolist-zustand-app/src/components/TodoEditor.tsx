import React, { useState } from 'react';

import TextField from './TextField';
import Button from './Button';
import { useTodoStore } from '../store/todoStore';

export default function TodoEditor() {
  const [task, setTask] = useState('');
  const { addTodo } = useTodoStore((state) => state.action);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmitHandler();
    }
  };

  const onSubmitHandler = () => {
    addTodo(task);
    setTask('');
  };

  return (
    <div className="flex items-center justify-center gap-[0.8rem] mb-[1.6rem]">
      <TextField
        style={'flex-1'}
        placeholder="Enter Todo List"
        value={task}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
      <Button
        type="button"
        style={'w-[7.7rem]'}
        btnStyleType="full"
        onClick={onSubmitHandler}
      >
        Add
      </Button>
    </div>
  );
}
