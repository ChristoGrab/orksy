import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CreateStoreForm() {
  
  // list of state variables
  const dispatch = useDispatch();
  const history = useHistory();
  
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  
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
          <input className="store-form-input"
            type="text"
            required
            value={description}
            onChange={e => setDescription(e.target.value)} />
        <button>Add your listing!</button>
      </form>
    </div>
  )
}

export default CreateStoreForm;
