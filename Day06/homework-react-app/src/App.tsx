import Title from './components/Title';
import Button from './components/Button';
import TextField from './components/TextField';
import CheckBox from './components/CheckBox';

export default function App() {
  return (
    <>
      <Title type="main">Login Into App</Title>
      <Title type="sub">Please enter your details to continue.</Title>
      <TextField type="text" placeholder="someone@example.com" />
      <TextField type="password" placeholder="Enter Password" />
      <CheckBox>
        I agree with <span className="bold">terms</span> and{' '}
        <span className="bold">policies.</span>
      </CheckBox>
      <Button btnStyleType="full">Log In</Button>
      <Button btnStyleType="line">Go To Sing up</Button>
    </>
  );
}
