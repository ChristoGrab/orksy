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
  
  useEffect(() => {
    dispatch(getSearchProducts(keyword))
  }, [dispatch, keyword])
  
  
  return (
    <div className="search-page-container">
      We found {products.length} produkt(z) that match yer search:
      
      {products.map(product => (
        <div key={product.id} className="product-card-container">
          <ProductCard product={product}/>
        </div>
      ))}
    </div>
  )
}

export default SearchPage;
