import "./LoadingScreen.css"

const LoadingScreen = () => {
  return (
    <div className="loading-popup-container">
      <div className="loading-popup-text">
        Yer request is in da workz, waitin' on da gretchins to finish da job
      </div>
      <div className="loading-wheel-container">
        <i className="fa-solid fa-spinner" />
      </div>
    </div>
  )
}

export default LoadingScreen
