import React, {  useState } from "react";
import {  Link } from "react-router-dom";
import axios from "axios";
import "./form.css"
 function Form(){

   const [state,setstate]=useState({ image:"",auther:"",location:"",description:""})
  //  const[pic,setpic]=useState("")
   const config ={
    headers: {
      "content-type": "multipart/form-data"
    }
  }

  const handleClick=async()=>{
    
      const newPost={
        image:state.image,
        auther:state.auther,
          location:state.location,
          description:state.description
      }

 const   data=await  axios.post("http://localhost:8080/add/user", newPost, config)
        console.log(data)
        
  }
  
                
      

    return<>
        
        <div className="s"><input className="i" type="file" name="image" placeholder="No file choosen" onChange={(e)=>{ console.log(e.target.files)
            setstate({...state,image:e.target.files[0]})}}/></div>
        <div className="s">   <input type="text" name="auther"  className="i" onChange={(e)=>{setstate({...state,auther:e.target.value})}} placeholder="Auther"></input> <input name="location" onChange={(e)=>{setstate({...state,location:e.target.value})}}type="text" className="nin" placeholder="Location"></input></div>
        <div className="s"><input name="decription" onChange={(e)=>{setstate({...state,description:e.target.value})}} type="text" id="i" placeholder="Description "></input></div>
        
       
        
    <Link to="/postview"> <button onClick={handleClick} type="submit" >POST </button></Link>
  
  
    {/* <img  src={pic}>  </img> */}

    </>
}
export default Form