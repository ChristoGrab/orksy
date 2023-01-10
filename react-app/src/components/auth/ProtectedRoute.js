import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import LoginForm from './LoginFormModal/LoginForm';

const ProtectedRoute = props => {
  const user = useSelector(state => state.session.user)
  return (
    <Route {...props}>
      {(user)? props.children 
      : <div className='protected-route-container'>
        <LoginForm />
      </div>}
    </Route>
  )
};


export default ProtectedRoute;
