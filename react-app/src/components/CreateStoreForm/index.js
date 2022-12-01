import { useEffect, useState } from 'react';
import { ReactReduxContext, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStoreThunk } from '../../store/stores'
import "./StoreForm.css"

function CreateStoreForm() {
  
  const sessionUser = useSelector(state => state.session.user)
  

  const dispatch = useDispatch();
  const history = useHistory();
  
  // list of state variables
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [errors, setErrors] = useState([])
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorList = []
    if (!name.length) errorList.push("Yer gotta give da store a name")
    if (name.length > 70) errorList.push("Dat namez too long 'n komplex for da boyz ta rememba'")
    if (!description.length) errorList.push("Yer gotta share some intel on da store for da boyz")

    setErrors(errorList)

    if (errorList.length) {
      return
    }

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
          Create Store
        </div>
        <div className="store-form-intro">
          So yer wanna make yer own storefront for da boyz to peruse, eh? Wot you got in mind?
          </div>
          {errors.map((error, idx) => 
          <div key={idx} className="error-message">{error}</div>)}
        <label className="form-label">Name</label>
          <input className="store-form-input"
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)} />
        <label className="form-label">Description</label>
          <textarea className="store-form-textarea"
            type="text"
            required
            value={description}
            onChange={e => setDescription(e.target.value)} />
        <button className="store-form-button" onClick={handleSubmit}>Join the WAAAAAGH!!</button>
      </form>
    </div>
  )
}

export default CreateStoreForm;
