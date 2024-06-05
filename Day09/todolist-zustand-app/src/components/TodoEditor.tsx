import { useState } from 'react';

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
    if (!task) return;
    if (e.nativeEvent.isComposing) return; // IME 이슈로 이벤트 두번 발생 막기
    if (e.key === 'Enter') {
      addTodo(task.trim());
      setTask('');
    }
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task) return;
    addTodo(task);
    setTask('');
  };

  return (
    <form
      className="flex items-center justify-center gap-[0.8rem] mb-[1.6rem]"
      onSubmit={onSubmitHandler}
    >
      <TextField
        style={'flex-1'}
        placeholder="Enter Todo List"
        value={task}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
      <Button type="submit" style={'w-[7.7rem]'} btnStyleType="full">
        Add
      </Button>
    </form>
  );
}
