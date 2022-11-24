import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getStoreThunk } from '../../store/stores';
import { deleteStoreThunk } from '../../store/stores';

function DeleteStore() {

  const { spotId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  // Use parseInt so thunk can interpret Id
  const deleteId = parseInt(spotId)
  
  useEffect(() => {
    dispatch(getStoreThunk(deleteId))
  }, [dispatch, deleteId])

  const confirmDelete = async (e) => {
    e.preventDefault();

    const response = await dispatch(deleteStoreThunk(deleteId))
    .catch(async (response) => {
      await response.json();
    })
    
    if (response) history.push('/user/profile')
  }

  const abortDelete = (e) => {
    e.preventDefault();

    history.push(`/spots/${spotId}`)
  }

  return (
    <div className='delete-page-container'>
      <h2>Are you sure you want to delete this listing?</h2>

      <i className="fa-solid fa-circle-exclamation"
      
      id="delete-spot-warning-logo"></i>
            <p>Doing so will erase it from our database, and is an irreversible process</p>
      <div className='delete-page-buttons'>
        <button
          className="confirm-delete-button"
          onClick={confirmDelete}>Yes, delete my listing</button>
        <button
          className="abort-delete-button"
          onClick={abortDelete}>No thanks, take me back to safety!</button>
      </div>
    </div>
  )
}

export default DeleteStore;
