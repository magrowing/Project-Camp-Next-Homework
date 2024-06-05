import axios from 'axios';

const BASE_URL = 'http://localhost:4000/';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getTodosData = async () => {
  try {
    const { data } = await instance.get('/todos');
    return data;
  } catch {
    throw new Error('Fetch get Data Error');
  }
};

export const postTodoData = async (task: string) => {
  try {
    const { data } = await instance.post('/todos', { task });
    return data;
  } catch (error) {
    throw new Error('Fetch post Data Error');
  }
};

export const putTodoData = async (id: string, task: string) => {
  try {
    await instance.put(`/todos/${id}`, { task });
  } catch (error) {
    throw new Error('Fetch put Data Error');
  }
};

export const patchTodoData = async (id: string) => {
  try {
    await instance.patch(`/todos/${id}`);
  } catch (error) {
    throw new Error('Fetch patch Data Error');
  }
};

export const deleteTodoData = async (id: string) => {
  try {
    await instance.delete(`/todos/${id}`);
  } catch (error) {
    throw new Error('Fetch patch Data Error');
  }
};
