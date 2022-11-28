import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard'
import { loadProductsThunk } from '../../store/products'
import './LandingPage.css'

const LandingPage = () => {
  
  const dispatch = useDispatch()
  
  const [dataLoaded, setDataLoaded] = useState(false)
  
  return (
    <div className="landing-page-container">
      <div className="categories-container">
        Katergories
      </div>
    </div>
  )
}

export default LandingPage;
