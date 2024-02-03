import React from 'react'
import '../CSS/Header.css'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'


//props work as arguments
export default function Header(props) {

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}   >
      <div className="container-fluid" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <Link className="navbar-brand" to="/home">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upper-case">Upper Case</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/json-beautifier">Json Beautifier</Link>
            </li>


          </ul>
          <div className="form-check form-switch">
            <label className="form-check-label">Enable Dark Mode</label>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired

}