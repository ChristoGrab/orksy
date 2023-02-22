import "./Footer.css"

const Footer = () => {
  return (
    <div className="main-page-footer">
      <div id="about-me">Made by Christo Grabowski. Orksy is a fullstack clone of Etsy inspired by the wild wackiness of the Orks in Warhammer 40K.</div>
      <div id="about-me-links">
        <a href="https://github.com/ChristoGrab" aria-label="Link to developer's github profile" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/christo-grabowski-894a82a6/" aria-label="Link to developer's Linkedin profile" target="_blank" rel="noreferrer">
          <i className="ourIco fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer;
