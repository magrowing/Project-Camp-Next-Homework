import Title from '@/components/Title';
import TodoEditor from '@/components/TodoEditor';
import TodoList from '@/components/TodoList';

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-[100vh]">
      <section className="w-[37.5rem] px-[2.5rem] py-[4rem] bg-white rounded-md">
        <div>
          <Title type="main">Todo List App</Title>
          <Title type="sub">Please enter your details to continue.</Title>
        </div>
        <TodoEditor />
        <TodoList />
      </section>
    </main>
  );
}
