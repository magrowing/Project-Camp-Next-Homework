'use client';
import { useRef } from 'react';

import { todoAddAction } from '@/libs/action';

import TextField from './TextField';
import Button from './Button';

export default function TodoEditor() {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      className="flex items-center justify-center gap-[0.8rem] mb-[1.6rem]"
      action={async (formData) => {
        await todoAddAction(formData);
        ref.current?.reset();
      }}
    >
      <TextField style={'flex-1'} placeholder="Enter Todo List" name="task" />
      <Button style={'w-[7.7rem]'} btnStyleType="full">
        Add
      </Button>
    </form>
  );
}
