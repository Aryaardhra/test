import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import'./LogIn.css'
import Swal from 'sweetalert2'

export default function LogIn() {

  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function handleLogin(e) {
   
    e.preventDefault();
    let correctPassword = window.localStorage.getItem(email);
    if (password === correctPassword) navigateTo("home");
    else
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<em>Username and Password do not match!</em>",
      });
  }

  return (
    <>
    <div className=" main m-4 ">
      <div className=" sub m-4 p-6 mb-4" >
      <form>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Email address :{" "}
            </label><span className="span_in">*</span>
            <input
              type="email"
              required
              id="form2Example1"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Password :{" "}
            </label><span className="span_in">*</span>
            <input
              type="password"
              required
              id="form2Example2"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="btn btn-outline-success"
            onClick={handleLogin}
          >
            Sign in
          </button>

          <div className="signUp">
            New User ?<br />
            <button
              type="button"
              id="signup"
              className="btn btn-outline-primary"
              onClick={() => {
                navigateTo("signup");
              }}
            >
              Sign Up
            </button>
          </div>
        </form>

      </div>
    </div>
    </>
  );
}
