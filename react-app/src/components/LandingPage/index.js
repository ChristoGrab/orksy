import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearProduct, loadProductsThunk } from '../../store/products'
import ProductCard from '../ProductCard'
import Footer from "../Footer"
import './LandingPage.css'

const LandingPage = () => {

  const dispatch = useDispatch()

  const sessionUser = useSelector(state => state.session.user)
  const products = useSelector(state => state.products.productList)
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    dispatch(loadProductsThunk())
      .then(res => setDataLoaded(true))
      
    return (() => clearProduct())
  }, [dispatch])

  if (!products) return null;

  let productList = Object.values(products)

  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

  let newList = shuffle(productList)

  return (
    <>
      {dataLoaded === true && (
    <div className="landing-page-container">
      <div id="welcome-message-container">
        {sessionUser ? <h1>Welkum Back, <Link id="welcome-message-link" to="/profile">{sessionUser.username}</Link>!</h1> : <h1>Welkum to Orksy</h1>}
      </div>
      <div className="categories-outer-container">
        <Link to='/store/5' className="category-link">
          <img className="category-pic" alt="Choppas" src={"https://orksybucket.s3.us-east-2.amazonaws.com/Choppa-store.jpg"} />
          Choppas</Link>
          <Link to='/store/3' className="category-link">
          <img className="category-pic" alt="Shootas" src={"https://orksybucket.s3.us-east-2.amazonaws.com/dakka-store.jpg"} />
          Shootas</Link>
          <Link to='/store/2' className="category-link">
          <img className="category-pic" alt="Meks" src={"https://orksybucket.s3.us-east-2.amazonaws.com/mek-shop.jpg"} />
          Meks</Link>
          <Link to='/store/1' className="category-link">
          <img className="category-pic" alt="Squigs" src={"https://orksybucket.s3.us-east-2.amazonaws.com/squig-store.jpg"} />
          Squigs</Link>
          <Link to='/store/4' className="category-link">
          <img className="category-pic" alt="Rokkits" src={"https://orksybucket.s3.us-east-2.amazonaws.com/flight-store.jpg"} />
          Rokkits</Link>
      </div>
      <div className="landing-page-grid">
        {newList.map(product => (
          <div key={product.id} className="product-card-container">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
    )}
    </>
  )
}

export default LandingPage;
