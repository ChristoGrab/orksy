import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';
import DemoUserButton from '../DemoUserButton';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setErrors(["Yer passwords don't match, ya git"])
    }
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form className="authentication-form" onSubmit={onSignUp}>
      <div className="auth-form-header">
        Wanna Join the Warband, do ya?
      </div>
      
      <div className="auth-form-errors">
      {errors.map((error, ind) => (
          <div className="error-message" key={ind}>{error}</div>
        ))}
      </div>
      <div className='auth-form-fields'>
        <label className="auth-label">User Name <span className="required-star">*</span></label>
        <input
          className="auth-input"
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
        <label className="auth-label">Email <span className="required-star">*</span></label>
        <input
          className='auth-input'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
        <label className="auth-label">Password <span className="required-star">*</span></label>
        <input
          className="auth-input"
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
        <label className="auth-label">Repeat Password <span className="required-star">*</span></label>
        <input
          className="auth-input"
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
        ></input>
      </div>
      <button className="auth-submit-button green" type='submit'>Register</button>
      <div id="or-line">OR</div>
      <DemoUserButton />
    </form>
  );
};

export default SignUpForm;
