import nothingHere from '../../assets/404-image.png'
import './PageNotFound.css'

const PageNotFound = () => {
  return (
  <div id="no-page-container">
    <div id="no-page-message">The page yer lookin' for don't exist</div>
    <img id="no-page-image" src={nothingHere} alt="a goofy image of orks being confused" />
  </div>
  )
}

export default PageNotFound;
