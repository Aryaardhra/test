import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./UpLoadImg.css"
import Loading from '../loading/Loading';
import { Link } from 'react-router-dom';
import ImgThumbnail from '../imgthumbnail/ImgThumbnail';

export default function UpLoadImg() {

  const [image, setImage] = useState( "" );
  const [user, setUser] = useState ([]);
  const [loading, setLoading] = useState();

  function handlechange(e) {
    console.log(e.target.files)
    setImage(e.target.files[0])
  }

  function data() {
    const formData = new FormData();
    console.log(image)
    formData.append("image",image);
    formData.append("first_name", "Sachin")
    formData.append("last_name", "Tendulkar")
    //console.log(image)
    axios.post(`http://localhost:4000/users`, formData).then((res)=>{
      console.log(res)
    })  
  }

  useEffect(()=>{
    setLoading(true);
      fetch("http://localhost:4000/users")
      .then((response)=> response.json())
      .then((data)=> {
          console.log(data);
          setUser(data);
          setLoading(false);
  });
}, []); 

  return (
    <>
    <div className='Img'>
    <div className="input-group col-lg-3 col-md-4 col-6">
    <input type="file" 
    name="file"
    className="form-control" 
    id="inputGroupFile04"
    accept="image/png, image/jpeg"
    aria-describedby="inputGroupFileAddon04"
    aria-label="Upload"
    onChange={handlechange}
    />
   <button className="btn btn-outline-secondary" 
   type="button" 
   id="inputGroupFileAddon04"
   onClick={data}>
   Button</button>
   </div>
    
    <div className="display p-4">
    {loading?  <Loading/>:
    <div className="container-fluid my-4 ">
        <div className="row align-items-center gy-5  ">
          
        {user.map((value)=>( 
          <div className="col-lg-3 col-md-4 col-6" key={value.id}> 
            <div className="card p-2 "  >
           <ImgThumbnail
           first_name={value.first_name}
           last_name ={value.last_name}
           src= {value.image}
           style = {{height : "45px", width : "45px"  }}
           />
          <div className="card-body" >
          <p className="card-title"> First Name : {value.first_name}</p>
          <p className="card-text">Last Name : {value.last_name}</p>
          <button type="button" className="btn btn-outline-secondary">
          <Link to= {`/user/${value.id}`}>Details</Link></button>
          </div>
             </div>
          </div>    
        ))}
        </div>
    </div>
    }
    </div>
    </div>
    </>
  )
}
