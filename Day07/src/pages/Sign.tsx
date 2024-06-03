import { useState } from 'react';

import Title from '../components/Title';
import TextField from '../components/TextField';
import CheckBox from '../components/CheckBox';
import Button from '../components/Button';

export default function Sign() {
  const [action, setAction] = useState<'Login' | 'Sign'>('Login');

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    checkbox: false,
  });

  const isValid = () => {
    const validate =
      form.email.trim() === '' || form.password.trim() === '' || !form.checkbox;
    return action === 'Login' ? validate : validate || form.name.trim() === '';
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === 'checkbox' ? e.target.checked : e.target.value,
    }));
  };

  const onClickHandler = () => {
    setAction(action === 'Login' ? 'Sign' : 'Login');
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValid()) {
      alert(`${action} Success`);
      setForm({
        name: '',
        email: '',
        password: '',
        checkbox: false,
      });
    } else {
      alert(`invalid input, please check again`);
    }
  };

  return (
    <section className="section-wrapper">
      <div>
        <Title type="main">{action} Into App</Title>
        <Title type="sub">Please enter your details to continue.</Title>
      </div>
      <form className="form-wrapper" onSubmit={onSubmitHandler}>
        {action === 'Sign' && (
          <TextField
            type="text"
            name="name"
            value={form.name}
            placeholder="Enter Your Name"
            onChange={onChangeHandler}
            required
          />
        )}
        <TextField
          type="email"
          name="email"
          value={form.email}
          placeholder="someone@example.com"
          onChange={onChangeHandler}
          required
        />
        <TextField
          type="password"
          name="password"
          value={form.password}
          placeholder="Enter Password"
          onChange={onChangeHandler}
          required
        />
        <CheckBox
          name="checkbox"
          checked={form.checkbox}
          onChange={onChangeHandler}
        >
          I agree with <span className="bold">terms</span> and{' '}
          <span className="bold">policies.</span>
        </CheckBox>
        <div className="btn-wrapper">
          <Button type="submit" btnStyleType="full" disabled={isValid()}>
            {action === 'Login' ? `Log In` : `Sign In`}
          </Button>
          <Button type="button" btnStyleType="line" onClick={onClickHandler}>
            Go To {action === 'Sign' ? `Log In` : `Sign In`}
          </Button>
        </div>
      </form>
    </section>
  );
}
