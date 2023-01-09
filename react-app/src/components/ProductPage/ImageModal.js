import "./ProductPage.css"

const ImageModal = ({image}) => {

  return (
    <div className="image-modal-container">
    <img className="image-modal" src={image} alt="product-closeup" />
    </div>
  );
}

export default ImageModal;
