import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginFormModal/LoginForm';
import SignUpForm from './components/auth/SignupFormModal/SignUpForm';
import ProfilePage from './components/Profile';
import StoreFront from './components/Storefront'
import CreateStoreForm from './components/CreateStoreForm';
import DeleteStore from './components/DeleteStore'
import NavBar from './components/Navbar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import "./index.css"
import LandingPage from './components/LandingPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact={true} >
          <LandingPage />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/profile'>
          <ProfilePage />
        </Route>
        <Route path="/store/create" exact={true}>
          <CreateStoreForm />
        </Route>
        <Route path="/store/:storeId" exact={true}>
          <StoreFront />
        </Route>
        {/* <Route path="/store/:storeId/edit" exact={true}>
          <EditStoreForm />
        </Route> */}
        <Route path="/store/:storeId/delete" exact={true}>
          <DeleteStore />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
