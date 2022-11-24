import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getStoreThunk } from '../../store/stores';
import { deleteStoreThunk } from '../../store/stores';

function DeleteStore() {
  
  

  const { storeId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  // Use parseInt so thunk can interpret Id
  const deleteId = storeId

  useEffect(() => {
    dispatch(getStoreThunk(deleteId))
  }, [dispatch, deleteId])

  const confirmDelete = async (e) => {
    e.preventDefault();

    const response = await dispatch(deleteStoreThunk(deleteId))
    .catch(async (response) => {
      await response.json();
    })
    
    if (response) history.push('/profile')
  }

  const abortDelete = (e) => {
    e.preventDefault();

    history.push(`/profile`)
  }

  return (
    <div className='delete-page-container'>
      <h2>Wot, yer tryna git rid of yer store now?</h2>

      <i className="fa-solid fa-circle-exclamation"
      
      id="delete-spot-warning-logo"></i>
            <p>Give us the word and the weirdboyz'll zap it to a right crisp</p>
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

export default DeleteStore;
