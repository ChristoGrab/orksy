import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticate } from './store/session';
import ProtectedRoute from "./components/auth/ProtectedRoute"
import LoginForm from './components/auth/LoginFormModal/LoginForm';
import SignUpForm from './components/auth/SignupFormModal/SignUpForm';
import ProfilePage from './components/Profile';
import StoreFront from './components/Storefront'
import SearchPage from './components/SearchPage'
import CreateStoreForm from './components/CreateStoreForm';
import EditStoreForm from './components/EditStoreForm';
import DeleteStore from './components/DeleteStore'
import NavBar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ProductPage from './components/ProductPage';
import CreateProductForm from './components/Products/CreateProductForm';
import DeleteProduct from './components/Products/DeleteProduct'
import EditProductForm from './components/Products/EditProductForm';
import ImageModal from './components/ProductPage/ImageModal';
import CartPage from './components/CartPage';
import PageNotFound from './components/PageNotFound'
import "./index.css"

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
        <Route path="/search/:keyword">
          <SearchPage />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/profile'>
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute path="/store/create" exact={true}>
          <CreateStoreForm />
        </ProtectedRoute>
        <Route path="/store/:storeId" exact={true}>
          <StoreFront />
        </Route>
        <ProtectedRoute path="/store/:storeId/edit" exact={true}>
          <EditStoreForm />
        </ProtectedRoute>
        <Route path="/store/:storeId/delete" exact={true}>
          <DeleteStore />
        </Route>
        <ProtectedRoute path="/products/create" exact={true}>
          <CreateProductForm />
        </ProtectedRoute>
        <Route path="/products/:productId/edit" exact={true}>
          <EditProductForm />
        </Route>
        <ProtectedRoute path="/products/:productId/delete" exact={true}>
          <DeleteProduct />
        </ProtectedRoute>
        <Route path="/products/:productId" exact={true}>
          <ProductPage />
        </Route>
        <Route path="/image" exact={true}>
          <ImageModal />
        </Route>
        <ProtectedRoute path="/cart" exact={true}>
          <CartPage />
        </ProtectedRoute>
        <Route path="*">
         <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
