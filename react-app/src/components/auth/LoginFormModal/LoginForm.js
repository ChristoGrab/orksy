import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../store/session';
import DemoUserButton from '../DemoUserButton';
import "../AuthForms.css"
import SignUpForm from '../SignupFormModal/SignUpForm';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [switchForm, setSwitchForm] = useState(false)
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };
  
  
  const switchToSignup = async (e) => {
    setSwitchForm(true)
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div>
      {switchForm ? <SignUpForm />
      :
    <form className="authentication-form" onSubmit={onLogin}>
      <div className="auth-form-title">
        <div>Sign in: Orkz Only</div>
        <div className="register-button" onClick={switchToSignup}>Register</div>
      </div>
        {errors.map((error, ind) => (
          <div className="error-message" key={ind}>{error}</div>
        ))}
      <div className="auth-form-fields">
        <label className="auth-label" htmlFor='email'>Email Address <span className="required-star">*</span></label>
        <input
          className="auth-input"
          name='email'
          type='text'
          value={email}
          onChange={updateEmail}
        />
        <label htmlFor='password'>Password <span className="required-star">*</span></label>
        <input
          className="auth-input"
          name='password'
          type='password'
          value={password}
          onChange={updatePassword}
        />
        <button className="auth-submit-button" type='submit'>Sign In</button>
        <DemoUserButton />
      </div>
    </form>
    }
    </div>
  );
};

export default LoginForm;
