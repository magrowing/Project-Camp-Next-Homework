import Title from '../components/Title';
import TodoEditor from '../components/TodoEditor';
import TodoList from '../components/TodoList';

export default function Todo() {
  return (
    <section className="section-wrapper">
      <div>
        <Title type="main">Todo List App</Title>
        <Title type="sub">Please enter your details to continue.</Title>
      </div>
      <TodoEditor />
      <TodoList />
    </section>
  );
}
