import React from 'react';
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg sticky-top' id='nav'>
      <div className='container-fluid'>
        <Link activeClass='active-nav-link'  className='navbar-brand text-uppercase' smooth spy to='home'>Wilson Oyem</Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarScroll'
          aria-controls='navbarScroll'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'>
          </span>
        </button>
        <div className='collapse navbar-collapse' id='navbarScroll'>
          <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'>
            <li className='nav-item'>
              <Link
                activeClass='active-nav-link'
                className='nav-link'
                to='projects'
                spy
              >Projects</Link>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                target="_blank" rel="noopener noreferrer"
                href='https://docs.google.com/document/d/e/2PACX-1vRlEyozQEzZ4pns2IcJtZDlkdpgyd7yz-pl5guGpXnk1uCPOCRRkcsq7yLiKbT0Rm7gUa8njLQRMBd6/pub'
              >Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
