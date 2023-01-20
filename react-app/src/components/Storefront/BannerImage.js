import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateStoreThunk } from "../../store/stores";
import "./BannerImage.css"

const BannerImage = ({ storeId }) => {
  
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false)

  const showBannerImageForm = (e) => {
    if (showForm) return;
    setShowForm(true)
  };
  
  const submitBannerImage = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    
    let fileUpload = document.querySelector("#imageInput")
    
    if (!fileUpload.files.length) {
      return
    }
    
    let img = fileUpload.files[0]
    
    formData.append("file", img)
    
    const uploadImage = await fetch('/api/stores/upload', {
      method: "POST",
      body: formData
    })
    
    const urlObject = await uploadImage.json();
    
    const bannerUrl = {
      banner_image: urlObject.url
    }
    
    dispatch(updateStoreThunk(bannerUrl, storeId))
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) return data.errors;
    })
    
    return setShowForm(false)
  }

  useEffect(() => {
    if (!showForm) return;
    const closeForm = () => {
      setShowForm(false)
    };

    document.addEventListener('click', closeForm);
    return () => document.removeEventListener("click", closeForm);
  }, [showForm])

  return (
    <>
      <button
        className="add-image-button"
        onClick={showBannerImageForm}>
        <i class="fa-solid fa-camera"></i>
      </button>
      {showForm && (
        <div className="banner-image-form-container">
          <form className="banner-image-form">
            <input
              type="file"
              className="banner-image-input"
              id="imageInput"
              name="image"
              accept="image/png, image/jpeg"
            />
            <button 
              type="submit"
              onClick={submitBannerImage}
              className="upload-banner-image-button">
              Upload
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default BannerImage;
