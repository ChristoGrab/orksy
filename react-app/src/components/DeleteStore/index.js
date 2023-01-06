import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getStoreThunk } from '../../store/stores';
import { deleteStoreThunk } from '../../store/stores';
import boomPik from "../../assets/delete-store.jpg"
import './DeleteStore.css'

function DeleteStore() {

  const { storeId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const deleteId = storeId;

  useEffect(() => {
    dispatch(getStoreThunk(deleteId))
  }, [dispatch, deleteId])

  
  // functions to handle either confirming or aborting deletion of store
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
      <div id="boompik-flava-text">
        Give us da word and da weirdboyz'll zap it to a right crisp,
        <br />
        but all yer associated produkts'll go bye-bye as well...
      </div>
      <img src={boomPik} id="boompik" alt="Are you sure?" />
      <div className='delete-page-buttons'>
        <button
          className="confirm-delete-button red"
          onClick={confirmDelete}>Make it go boom!!</button>
        <button
          className="abort-delete-button"
          onClick={abortDelete}>Git back to work</button>
      </div>
    </div>
  )
}

export default DeleteStore;
