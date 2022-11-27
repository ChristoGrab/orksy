import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { getStoreThunk, updateStoreThunk } from '../../store/stores'
import "../CreateStoreForm/StoreForm.css"

function EditStoreForm() {

  const sessionUser = useSelector(state => state.session.user)

  // list of state variables
  const dispatch = useDispatch();
  const history = useHistory();
  const { storeId } = useParams();


  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [errors, setErrors] = useState([])

  useEffect(() => {
    (dispatch(getStoreThunk(storeId))
      .then(res => {
        setName(`${res.name}`)
        setDescription(`${res.description}`)
      }))
  }, [dispatch, storeId])

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
      owner_id: sessionUser.id,
      banner_image: ""
    }

    console.log(new_store)
    dispatch(updateStoreThunk(new_store, storeId))
      .then(data => history.push('/profile'))
  }

  return (
    <div className="store-form-container">
      <form className="store-form">
        <div className="store-form-greeting">
          Edit Store
        </div>
        Wanna give da store a shiny new coat of paint, do yer?
        {errors.map((error, idx) =>
          <div key={idx} className="error-message">{error}</div>)}
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
