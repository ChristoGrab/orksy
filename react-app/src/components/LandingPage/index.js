import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard'
import { loadProductsThunk } from '../../store/products'
import './LandingPage.css'

const LandingPage = () => {
  
  const products = useSelector(state => state.products.productList)
  const dispatch = useDispatch()
  const [dataLoaded, setDataLoaded] = useState(false)
  
  useEffect(() => {
    dispatch(loadProductsThunk())
  }, [dispatch])
  
  if (!products) return null;
  
  let productList = Object.values(products)
  console.log(productList)
  
  return (
    <div className="landing-page-container">
      <div className="categories-container">
        Katergories
      </div>
      <div className="landing-page-grid">
      {productList.map(product => (
        <div key={product.id} className="product-card-container">
        <ProductCard product={product}/>
        </div>
      ))}
      </div>
    </div>
  )
}

export default LandingPage;
