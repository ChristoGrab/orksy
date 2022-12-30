import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getMyStoreThunk } from '../../../store/stores';
import "../Products.css"

const EditProductForm = () => {
  
  const { productId } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  // list of state variables
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [errors, setErrors] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const formData = new FormData();

  useEffect(() => {
    dispatch(getMyStoreThunk())
  }, [dispatch])

  useEffect(() => {
    (async () => {
        const data = await fetch(`/api/products/${productId}`)
        const res = await data.json()
        setName(`${res.name}`)
        setDescription(`${res.description}`)
        setPrice(`${res.price}`)
    })();
}, [productId])

  let correctFile = true

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorList = []
    if (!name.length) errorList.push("Yer gotta give da produkt a name")
    if (name.length > 50) errorList.push("Dat namez too long 'n komplex for da boyz ta rememba'")
    if (!description.length) errorList.push("Yer gotta give da produkt a derscripshun")
    if (description.length > 1000) errorList.push("Da boyz don't like seein so many wordz...")
    if (price < 1 || price > 100000) errorList.push("Pick a price between 1 and 10000 teef")

    let myImage = document.querySelector("#imageInput")
    setErrors(errorList)

    if (errorList.length) {
      return
    } else {
      if (!myImage.files.length) {
        errorList.push("You gotta select a piktur so da boyz know yer not just makin produkts up")
        return setErrors(errorList)
      }

      let img = myImage.files[0]
      
      if (img.type !== "image/gif" && img.type !== "image/jpeg" && img.type !== "image/png") {
        correctFile = false
      }

      if (correctFile === false) errorList.push("Ye've gotta pick a valid filetype ta upload")
      
      if (errorList.length) return

      formData.append('file', img)

      setSubmitted(true)

      const picture = await fetch('/api/products/upload', {
        method: "POST",
        body: formData
      })

      const urlObj = await picture.json()

      const new_product = {
        name,
        description,
        price,
        image: urlObj.url
      }
    
    
    const response = await fetch(`/api/products/${productId}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(new_product)
    }).catch(async (res) => {
      await response.json();
    })
    
    if (response) history.goBack()
  }
  }

    return (
      <div className="store-form-container">
        <form className="store-form">
          <div className="store-form-greeting">
            Edit Produkt
          </div>
          <div className="store-form-intro">
            Gotta make sum changes to da produkt? We've got ya covered.
          </div>
          {errors.map((error, idx) =>
            <div key={idx} className="error-message">{error}</div>)}
          <label>Name - <span className="form-note">(max 50 chars)</span></label>
          <input className="store-form-input"
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)} />
          <label>Description - <span className="form-note">(max 1000 chars)</span></label>
          <textarea className="store-form-textarea"
            type="text"
            required
            value={description}
            onChange={e => setDescription(e.target.value)} />
          <label>Price - <span className="form-note">(1-10000) Note: Orks use their teeth, or 'teef', as a form of currency</span></label>
          <input className="store-form-input"
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)} />
          <label>Image - <span className='form-note'>Supported filetypes: png, jpg, gif</span></label>
          <input type="file" name="file" id="imageInput" encType="multipart/form-data" />
          <button className="store-form-button" onClick={handleSubmit}>Join the WAAAAAGH!!</button>
        </form>
        {submitted === true && (
          <div className="loading-popup-container">
            <div className="loading-popup-text">Yer request is in da workz, waitin' on da gretchins to finish da job</div>
            <div className="loading-wheel-container"><i className="fa-solid fa-spinner"></i></div>
          </div>
        )}
      </div>
    )
  }

  export default EditProductForm;
