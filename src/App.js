import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LogIn from "./components/login/LogIn"
import SignUp from './components/signup/SignUp'
import Home from "./components/home/Home"
import "./App.css"
import User from './components/user/User'

export default function App() {
  return (
    <>
    <div className = "App">
     <Routes>
        <Route exact path="/" element={<LogIn />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/user/:id" element={<User />} />
     </Routes>
     </div>
    </>
  )
}

