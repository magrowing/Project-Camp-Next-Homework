import Title from './components/Title';
import Button from './components/Button';

export default function App() {
  return (
    <>
      <Title type="main">Login Into App</Title>
      <Title type="sub">Please enter your details to continue.</Title>
      <Button btnStyleType="full">Log In</Button>
      <Button btnStyleType="line">Go To Sing up</Button>
    </>
  );
}
