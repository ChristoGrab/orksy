import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createProductThunk } from '../../../store/products'
import { getMyStoreThunk } from '../../../store/stores';

const CreateProductForm = () => {
  
  const sessionUser = useSelector(state => state.session.user)
  const store = useSelector(state => state.stores.singleStore)

  const dispatch = useDispatch();
  const history = useHistory();
  
  // list of state variables
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [errors, setErrors] = useState([])
  const formData = new FormData();
  
  useEffect(() => {
    dispatch(getMyStoreThunk())
  }, [dispatch])
  
  console.log(store)
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorList = []
    if (!name.length) errorList.push("Yer gotta give da store a name")
    if (name.length > 70) errorList.push("Dat namez too long 'n komplex for da boyz ta rememba'")
    if (!description.length) errorList.push("Yer gotta share some intel on da store for da boyz")

    let myImage = document.querySelector("#imageInput")
    setErrors(errorList)

    if (errorList.length) {
      return
    }
    
    console.log(myImage)
    
    let img = myImage.files[0]
    console.log(img)
    
    formData.append('file', img)
    
    const picture = await fetch('/api/products/upload', {
      method: "POST",
      body: formData
    })
    
    const urlObj = await picture.json()

    const new_product = {
      name,
      description,
      price,
      store_id: store.id,
      image: urlObj.url
    }
    
    dispatch(createProductThunk(new_product)).then((data) => {
      history.push('/profile')
    })

  }
  
  return (
    <div className="store-form-container">
      <form className="store-form">
        <div className="store-form-greeting">
          Create Produkt
        </div>
        <div className="store-form-intro">
          Lookin' ta earn sum extra teef? We'll get yer new shiny product on da market in no time, boss.
          </div>
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
        <label>Price</label>
            <input className="store-form-input"
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)} />
        <label>Image</label>
            <input type="file" name="file" id="imageInput" encType="multipart/form-data" />
        <button className="store-form-button" onClick={handleSubmit}>Join the WAAAAAGH!!</button>
      </form>
    </div>
  )
}

 

export default CreateProductForm;
