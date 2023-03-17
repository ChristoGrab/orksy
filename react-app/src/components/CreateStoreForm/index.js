import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStoreThunk } from '../../store/stores'
import formImage from '../../assets/create-image.jpg'
import "./StoreForm.css"

function CreateStoreForm() {

  // Get current user from redux store
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
    if (description.length > 1000) errorList.push("Yer gonna dazzle da boyz wiv such long descripshuns...")
    setErrors(errorList)

    // If there are any errors, exit function
    if (errorList.length) {
      return
    }

    const new_store = {
      name,
      description,
      owner_id: sessionUser.id
    }

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

        <label className="form-label">Name - <span className="form-note">(70 chars max)</span></label>
        <input 
          className="store-form-input"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)} 
        />
        
        <label htmlFor="description">Description - <span className="form-note">(1000 chars max)</span></label>
        <textarea
          className="store-form-textarea"
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        
        <button className="store-form-button green" onClick={handleSubmit}>Join the WAAAAAGH!!</button>
      </form>
      
      <img src={formImage} className="form-image" alt="orks in a mad max car" />
    </div>
  )
}

export default CreateStoreForm;
