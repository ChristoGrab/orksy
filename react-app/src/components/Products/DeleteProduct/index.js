import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getProductThunk } from '../../../store/products'
// import boomPik from "../../../assets/delete-store.jpg"

function DeleteProduct() {

  const { productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getProductThunk(productId))
  }, [dispatch, productId])

  const confirmDelete = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/products/${productId}`, {
      method: "DELETE"
    })
      .catch(async (response) => {
        await response.json();
      })

    if (response) history.goBack()
  }

  const abortDelete = (e) => {
    e.preventDefault();

    history.push(`/profile`)
  }

  return (
    <div className='delete-page-container'>
      <h2>Wot, yer tryna git rid of yer produkt now?</h2>
      <div id="boompik-flava-text">Give us da word and da weirdboyz'll zap it to a right crisp</div>
      {/* <img src={boomPik} id="boompik" /> */}
      <div className='delete-page-buttons'>
        <button
          className="confirm-delete-button"
          onClick={confirmDelete}>Make it go boom!!</button>
        <button
          className="abort-delete-button"
          onClick={abortDelete}>Git back to work</button>
      </div>
    </div>
  )
}

export default DeleteProduct;
