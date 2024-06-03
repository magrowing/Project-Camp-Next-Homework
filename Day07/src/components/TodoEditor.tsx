import { useState } from 'react';

import TextField from './TextField';
import Button from './Button';

type TodoEditorProps = {
  addTodo: (task: string) => void;
};

export default function TodoEditor({ addTodo }: TodoEditorProps) {
  const [text, setText] = useState('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimText = text.trim();
    if (trimText === '') return;
    addTodo(trimText);
    setText('');
  };

  return (
    <form
      className="flex items-center justify-center gap-[0.8rem] mb-[1.6rem]"
      onSubmit={onSubmitHandler}
    >
      <TextField
        style={{ flex: '1' }}
        placeholder="Enter Todo List"
        value={text}
        onChange={onChangeHandler}
      />
      <Button
        type="submit"
        style={{ width: '7.7rem' }}
        btnStyleType="full"
        disabled={text === ''}
      >
        Add
      </Button>
    </form>
  );
}
