const ProductCard = ({ product }) => {
  
  console.log(product)
  
  return (
    <div>
      Product name: {product.name}
    </div>
  )
}

export default ProductCard
