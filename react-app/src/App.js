import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginFormModal/LoginForm';
import SignUpForm from './components/auth/SignupFormModal/SignUpForm';
import ProfilePage from './components/Profile';
import StoreFront from './components/Storefront'
import CreateStoreForm from './components/CreateStoreForm';
import EditStoreForm from './components/EditStoreForm';
import DeleteStore from './components/DeleteStore'
import NavBar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ProductPage from './components/ProductPage';
import CreateProductForm from './components/Products/CreateProductForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import "./index.css"
import EditProductForm from './components/Products/EditProductForm';


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
        <Route path="/store/:storeId/edit" exact={true}>
          <EditStoreForm />
        </Route>
        <Route path="/store/:storeId/delete" exact={true}>
          <DeleteStore />
        </Route>
        <Route path="/products/create" exact={true}>
          <CreateProductForm />
        </Route>
        <Route path="/products/:productId/edit" exact={true}>
          <EditProductForm />
        </Route>
        <Route path="/products/:productId" exact={true}>
          <ProductPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
