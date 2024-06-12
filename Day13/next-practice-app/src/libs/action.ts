'use server';

import { revalidatePath } from 'next/cache';

export async function todoAddAction(formData: FormData) {
  const task = formData.get('task');

  const response = await fetch('http://localhost:4000/todos', {
    method: 'POST',
    body: JSON.stringify({ task }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    revalidatePath('/');
  }
}

export async function todoDeleteAction(id: string) {
  const response = await fetch(`http://localhost:4000/todos/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    revalidatePath('/');
  }
}

export async function todoCheckUpdateAction(id: string) {
  const response = await fetch(`http://localhost:4000/todos/${id}`, {
    method: 'PATCH',
  });

  if (response.ok) {
    revalidatePath('/');
  }
}

export async function todoTaskUpdateAction(id: string, task: string) {
  const response = await fetch(`http://localhost:4000/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ task }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    revalidatePath('/');
  }
}
