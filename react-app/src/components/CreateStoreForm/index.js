import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStoreThunk } from '../../store/stores'

function CreateStoreForm() {
  
  const sessionUser = useSelector(state => state.session.user)
  
  // list of state variables
  const dispatch = useDispatch();
  const history = useHistory();
  
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
    dispatch(createStoreThunk(new_store))
    .then(data => history.push('/profile'))
  }
  
  return (
    <div className="store-form-container">
      <form className="store-form">
        <div className="store-form-greeting">
          So yer wanna make yer own storefront for da boyz to peruse, eh? Wot you got in mind?
        </div>
        <label>Name</label>
          <input className="store-form-input"
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)} />
        <label>Description</label>
          <textarea className="store-form-input"
            type="text"
            required
            value={description}
            onChange={e => setDescription(e.target.value)} />
        <button onClick={handleSubmit}>Join the WAAAAAGH!!</button>
      </form>
    </div>
  )
}

export default CreateStoreForm;
