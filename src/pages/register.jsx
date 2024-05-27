import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {useAuth} from "../store/auth";
import { toast } from 'react-toastify';
export const Register = () => {
  const navigate=useNavigate();
  const [user, setUser]=useState({
    username:"",
    email:"",
    phone:"",
    password:""
  })

  const {storeTokenInLS}=useAuth();

  const handleChange=(e)=>{
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }

  const hadnleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const response=await fetch('http://localhost:5000/api/auth/register', {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
      
    })
    const res_data=await response.json();
    if(response.ok){
      
      storeTokenInLS(res_data.token)
      setUser({
        username:"",
        email:"",
        phone:"",
        password:""
      })
    toast.success("Successfully registered")
    navigate("/register");
    }
    else{
      toast.error(res_data.extraDetails ? res_data.extraDetails: res_data.message);
    }
    
    }catch(err){
      console.log("registration",err)
    }
    
    
  }

  return <>
    <section>
      <main>
        <div className='section-registration'>
        <div className='container grid grid-two-cols'>
          <div className='registration-image'>
            <img src="/images/register.png" alt="register image" widht="400" height="500"/>
          </div>

          <div className='registration-form'>
            <h1 className='main-heading mb-3'>registration form</h1>
            <br />

            <form onSubmit={hadnleSubmit} className='form'>
              <div>
                <label htmlFor='username'>username</label>
                <br />
                <input type='text' 
                name="username" 
                placeholder='username'
                value={user.username}
                id="username"
                required
                size="50"
                onChange={handleChange}
                autoComplete='off'/>
              </div>

              <div>
                <label htmlFor='email'>email</label>
                <br />
                <input type='email' 
                name="email" 
                placeholder='email'
                value={user.email}
                id="email"
                required
                size="50"
                onChange={handleChange}
                autoComplete='off'/>
              </div>

              <div>
                <label htmlFor='phone'>phone</label>
                <br />
                <input type='number' 
                name="phone" 
                placeholder='phone'
                value={user.phone}
                id="phone"
                required
                size="50"
                onChange={handleChange}
                autoComplete='off'/>
              </div>

              <div>
                <label htmlFor='password'>password</label>
                <br />
                <input type='text' 
                name="password" 
                placeholder='password'
                value={user.password}
                id="password"
                required
                size="50"
                onChange={handleChange}
                autoComplete='off'/>
              </div>

            <br />
            <button type='submit'>Register now</button>
            </form>
          </div>
        </div>
        </div>
      </main>
    </section>
  </>
}
