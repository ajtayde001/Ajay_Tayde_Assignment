import React, { useState } from 'react'
import axios from "axios";
import { Navigate } from 'react-router-dom';

const Singup = () => {
    const [formdata,setformdata]=useState({
        name:"",
        email:"",
        pass:"",
        age:"",
        city:"",
        gender:"",
       
    })
    const [isAuth,setIsAuth]=useState(false)
    const handleAdd=(e)=>{
        const {name,value}=e.target
        setformdata({...formdata,[name]:value})
        console.log(formdata)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formdata)
        axios.post("http://localhost:4500/users/register",formdata)
        .then((res)=>{
           console.log(res)
           setIsAuth(true)
        })
        .catch(err=>console.log(err))
    }
    console.log(isAuth)
    
    if(isAuth){
      return <Navigate to={"/login"}/>
    }
  return (
    <div>
      <form action="" onSubmit={(e)=>handleSubmit(e)}>
        <h1>sign up form</h1>
        <input type="text" name='name' placeholder='name' onChange={(e)=>handleAdd(e)}/>
        <br />
        <input type="text" name='email' placeholder='email' onChange={(e)=>handleAdd(e)}/>
        <br />
        <input type="text" name='pass' placeholder='pass' onChange={(e)=>handleAdd(e)}/>
        <br />
        <input type="text" name='age' placeholder='age' onChange={(e)=>handleAdd(e)}/>
        <br />
        <input type="text" name='city' placeholder='city' onChange={(e)=>handleAdd(e)}/>
        <br />
        <input type="text" name='gender' placeholder='gender' onChange={(e)=>handleAdd(e)}/>
        <br />
       
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Singup
