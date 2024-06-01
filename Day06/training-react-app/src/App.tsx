import './App.css';
import ModuleButton from './components/ModuleButton';

export default function App() {
  return (
    <div className="wrapper">
      <ModuleButton
        style={{
          width: '7.7rem',
          backgroundColor: '#4F4F4F',
          color: '#F5F5F5',
        }}
      >
        Add
      </ModuleButton>
      <ModuleButton
        style={{
          width: '7.7rem',
          backgroundColor: '#ED4848',
          color: '#F5F5F5',
        }}
      >
        Cancel
      </ModuleButton>
      <ModuleButton
        style={{
          width: '7.7rem',
          backgroundColor: '#7D48ED',
          color: '#F5F5F5',
        }}
      >
        Success
      </ModuleButton>
    </div>
  );
}
