import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateStoreThunk } from '../../store/stores'
import "../CreateStoreForm/StoreForm.css"

function EditStoreForm() {
  
  const sessionUser = useSelector(state => state.session.user)
  
  // list of state variables
  const dispatch = useDispatch();
  const history = useHistory();
  const { projectId } = useParams();

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const new_store = {
      name,
      description,
      owner_id: sessionUser.id
    }
    
    console.log(new_store)
    dispatch(updateStoreThunk(new_store, projectId))
    .then(data => history.push('/profile'))
  }
  
  return (
    <div className="store-form-container">
      <form className="store-form">
        <div className="store-form-greeting">
          Wanna give da store a shiny new coat of paint, do yer? Wot you got in mind, guv?
        </div>
        <label>Name</label>
          <input className="store-form-input"
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)} />
        <label>Description</label>
          <textarea className="store-form-textarea"
            type="text"
            required
            value={description}
            onChange={e => setDescription(e.target.value)} />
        <button className="store-form-button" onClick={handleSubmit}>Update Store</button>
      </form>
    </div>
  )
}

export default EditStoreForm;
