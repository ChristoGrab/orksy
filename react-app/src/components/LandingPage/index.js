import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard'
import { loadProductsThunk } from '../../store/products'
import './LandingPage.css'

const LandingPage = () => {

  const sessionUser = useSelector(state => state.session.user)
  const products = useSelector(state => state.products.productList)
  const dispatch = useDispatch()
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    dispatch(loadProductsThunk())
      .then(res => setDataLoaded(true))
  }, [dispatch])

  if (!products) return null;

  let productList = Object.values(products)
  console.log(productList)
  
  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
  
  let newList = shuffle(productList)

  return (
    <div>
      {dataLoaded === true && (
    <div className="landing-page-container">
      <div id="welcome-message-container">
        {sessionUser ? <h1>Welkum Back, <Link id="welcome-message-link" to="/profile">{sessionUser.username}</Link>!</h1> : <h1>Welkum to Orksy</h1>}
      </div>
      <div className="categories-outer-container">
        <Link to='/store/5' className="category-link">
          <img className="category-pic" src={"https://orksybucket.s3.us-east-2.amazonaws.com/Choppa-store.jpg"} />
          Choppas</Link>
          <Link to='/store/3' className="category-link">
          <img className="category-pic" src={"https://orksybucket.s3.us-east-2.amazonaws.com/dakka-store.jpg"} />
          Shootas</Link>
          <Link to='/store/2' className="category-link">
          <img className="category-pic" src={"https://orksybucket.s3.us-east-2.amazonaws.com/mek-shop.jpg"} />
          Meks</Link>
          <Link to='/store/1' className="category-link">
          <img className="category-pic" src={"https://orksybucket.s3.us-east-2.amazonaws.com/squig-store.jpg"} />
          Squigs</Link>
          <Link to='/store/4' className="category-link">
          <img className="category-pic" src={"https://orksybucket.s3.us-east-2.amazonaws.com/flight-store.jpg"} />
          Rokkits</Link>
      </div>
      
      <div className="landing-page-grid">
        {newList.map(product => (
          <div key={product.id} className="product-card-container">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="main-page-footer">
        <div id="about-me">Made by Christo Grabowski. Orksy is a fullstack clone of Etsy inspired by the wild wackiness of the Orks in Warhammer 40K.</div>
        <div id="about-me-links">
          <a href="https://github.com/ChristoGrab" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/christo-grabowski-894a82a6/" target="_blank">
            <i className="ourIco fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
    )}
    </div>
  )
}

export default LandingPage;
