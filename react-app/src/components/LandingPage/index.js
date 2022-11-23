import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="categories-container">
        Katergories
      </div>
      <div className="landing-page-grid">
        <div>piktures an such</div>
        <div>piktures an such</div>
        <div>piktures an such</div>
        <div>piktures an such</div>
        <div>piktures an such</div>
        <div>piktures an such</div>
        <div>piktures an such</div>
        <div>piktures an such</div>
      </div>
    </div>
  )
}

export default LandingPage;
