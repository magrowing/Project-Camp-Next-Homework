import Title from './components/Title';
import Button from './components/Button';
import TextField from './components/TextField';

export default function App() {
  return (
    <>
      <Title type="main">Login Into App</Title>
      <Title type="sub">Please enter your details to continue.</Title>
      <TextField type="text" placeholder="someone@example.com" />
      <TextField type="password" placeholder="Enter Password" />
      <Button btnStyleType="full">Log In</Button>
      <Button btnStyleType="line">Go To Sing up</Button>
    </>
  );
}
