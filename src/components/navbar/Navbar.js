import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigateTo = useNavigate();
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-indigo-100 ">
    
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active nav-link">
        <NavLink to="/home">Home </NavLink>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={()=>{
          navigateTo("/")
          }} className='btn btn-outline-dark float-end'>LOGOUT</button>
      </ul>
    </div>
  </nav>
    </>
  )
}