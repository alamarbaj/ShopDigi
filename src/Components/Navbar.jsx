import React from 'react'
import '../assets/css/style.css'
import profile from '../assets/images/user.jpg'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">ShopDigi</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active register" aria-current="page" href="#">Register</a>
            </li>




          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2 searchbar" type="search" placeholder="Search" aria-label="Search" />

          </form>



          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="text-decoration-none consumer" aria-current="page" href="#">Consumer Electronics</a>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className=' text-center signin'>Sign in</button>
            </li>
            <li className="nav-item">
              <button className=' text-center mycart'>My cart</button>
            </li>
          </ul>
          <img src={profile} alt="profile" className='profilepic' height="50px" width="50px"/>
        </div>
      </div>
    </nav>
  )
}
