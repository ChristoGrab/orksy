import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { getSearchProducts } from "../../store/products";
import "./SearchPage.css"
import { useEffect } from "react";
import ProductCard from "../ProductCard";

const SearchPage = () => {
  
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const products = useSelector(state => Object.values(state.products.productList))
  const [queryReturned, setQueryReturned] = useState(false)
  
  useEffect(() => {
    dispatch(getSearchProducts(keyword))
    .then(setQueryReturned(true))
  }, [dispatch, keyword])
  
  
  if (!queryReturned) return null;
  
  return (
    <div className="search-page-container">
      <div className="search-page-message">
      {products.length 
      ? <h2>We found {products.length} produkt(z) that match yer search:</h2> 
      : <h2>Sorry, we don't have any produktz like dat</h2>}
      </div>
      <div className="landing-page-grid">
      {products.map(product => (
        <div key={product.id} className="product-card-container">
          <ProductCard product={product}/>
        </div>
      ))}
      </div>
    </div>
  )
}

export default SearchPage;
