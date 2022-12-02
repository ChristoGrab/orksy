import { useState } from 'react'
import "./ProductPage.css"


const ImageModal = ({image}) => {
  
  console.log(image)

  return (
    <>
    <img src={image} />
    </>
  );
}

export default ImageModal;
