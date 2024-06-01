import './App.css';

import ModuleButton from './components/ModuleButton';
import StyledButton from './components/StyledButton';
import TailwindButton from './components/TailwindButton';

export default function App() {
  return (
    <main className="main">
      <section className="wrapper">
        <h3 className="title">CSS Modules</h3>
        <ModuleButton
          type="button"
          style={{
            width: '7.7rem',
            backgroundColor: '#4F4F4F',
            color: '#F5F5F5',
          }}
        >
          Add
        </ModuleButton>
        <ModuleButton
          type="button"
          style={{
            width: '7.7rem',
            backgroundColor: '#ED4848',
            color: '#F5F5F5',
          }}
        >
          Cancel
        </ModuleButton>
        <ModuleButton
          type="button"
          style={{
            width: '7.7rem',
            backgroundColor: '#7D48ED',
            color: '#F5F5F5',
          }}
        >
          Success
        </ModuleButton>
      </section>
      <section className="wrapper">
        <h3 className="title">styled-components</h3>
        <StyledButton
          type="button"
          style={{
            width: '7.7rem',
            backgroundColor: '#4F4F4F',
            color: '#F5F5F5',
          }}
        >
          Add
        </StyledButton>
        <StyledButton
          type="button"
          style={{
            width: '7.7rem',
            backgroundColor: '#ED4848',
            color: '#F5F5F5',
          }}
        >
          Cancel
        </StyledButton>
        <StyledButton
          type="button"
          style={{
            width: '7.7rem',
            backgroundColor: '#7D48ED',
            color: '#F5F5F5',
          }}
        >
          Success
        </StyledButton>
      </section>
      <section className="wrapper">
        <h3 className="title">Tailwind CSS</h3>
        <TailwindButton
          type="button"
          style={{
            width: '7.7rem',
            backgroundColor: '#4F4F4F',
            color: '#F5F5F5',
          }}
        >
          {' '}
          Add
        </TailwindButton>
        <TailwindButton
          type="button"
          style={{
            width: '7.7rem',
            backgroundColor: '#ED4848',
            color: '#F5F5F5',
          }}
        >
          Cancel
        </TailwindButton>
        <TailwindButton
          type="button"
          style={{
            width: '7.7rem',
            backgroundColor: '#7D48ED',
            color: '#F5F5F5',
          }}
        >
          Success
        </TailwindButton>
      </section>
    </main>
  );
}
