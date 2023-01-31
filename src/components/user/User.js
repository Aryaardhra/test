import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
//import "../product/ProductImg.css";

export default function User() {

    const {id}= useParams();
    const initialState ={
      image: [""],
     first_name: " ",
     last_name: " ",
     email: " "
    };

    const [user, setUser]= useState(initialState);

    useEffect(()=>{
      fetchDetails();
    }, [id]);

    const fetchDetails= async()=>{
      const response= await axios.get(`http://localhost:4000/users/${id}` );
      console.log(response);
      setUser(response.data);
    };
  return (
    <>
    <div className="main">
      <div className="container">
        <div className="row align-items-center">
          <div className=" col-md-6 ">
          <img src={user.image} className=" img-fluid p-4 " alt="something went wrong" />
          </div>
            <div className=" col-md-6 p-4"> 
            <p className="card-title">First Name : {user.first_name}</p>
            <br/>
             <p className="card-text" >Last Name :{user.last_name}</p>
             <br/>
             <p className="card-text">Email ID :{user.email}</p>    
          </div>
        </div>
      </div> 
      </div>
    </>
  );
}
