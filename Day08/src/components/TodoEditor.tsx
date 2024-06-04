import { useState } from 'react';

import Button from './html/Button';
import Input from './html/Input';

import { useDispatchContext } from '../context/todoContext';

import { v4 as uuidv4 } from 'uuid';

const TodoEditor = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatchContext();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      payload: { id: uuidv4(), task: text, completed: false },
    });
    setText('');
  };
  return (
    <>
      <form action="" className="flex gap-2" onSubmit={onSubmitHandler}>
        <Input
          type="text"
          placeholder="Enter Your Todo"
          value={text}
          onChange={onChangeHandler}
        />
        <Button type="submit" style={'w-[77px] bg-[#4F4F4F] text-white'}>
          Add
        </Button>
      </form>
    </>
  );
};
export default TodoEditor;
