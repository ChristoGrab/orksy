import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { login } from '../../../store/session';
import DemoUserButton from '../DemoUserButton';
import SignupFormModal from '../SignupFormModal';
import "../AuthForms.css"

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };
  
  const demoLogin = async (e) => {
    e.preventDefault();
    
    setEmail("gork@teef.io")
    setPassword("password2")
    
    console.log("email", email)
    console.log("password", password)
    
    const data = await dispatch(login(email, password))
    if (data) {
      setErrors(data);
    }
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
    <form className="authentication-form" onSubmit={onLogin}>
      <div className="auth-form-title">
        Log in: Orkz only
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
  );
};

export default LoginForm;
