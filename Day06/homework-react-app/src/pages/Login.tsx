import Title from '../components/Title';
import TextField from '../components/TextField';
import CheckBox from '../components/CheckBox';
import Button from '../components/Button';

export default function Login() {
  return (
    <section className="section-wrapper">
      <div>
        <Title type="main">Login Into App</Title>
        <Title type="sub">Please enter your details to continue.</Title>
      </div>
      <form className="form-wrapper">
        <TextField type="text" placeholder="someone@example.com" />
        <TextField type="password" placeholder="Enter Password" />
        <CheckBox>
          I agree with <span className="bold">terms</span> and{' '}
          <span className="bold">policies.</span>
        </CheckBox>
      </form>
      <div className="btn-wrapper">
        <Button type="button" btnStyleType="full">
          Log In
        </Button>
        <Button type="button" btnStyleType="line">
          Go To Sing up
        </Button>
      </div>
    </section>
  );
}
