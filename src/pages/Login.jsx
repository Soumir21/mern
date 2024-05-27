import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

export const Login = () => {
  const navigate=useNavigate();
  const [user, setUser]=useState({
    email:"",
    password:"",
    
  })
  const {storeTokenInLS}=useAuth();
  const handleChange=(e)=>{
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }

  const hadnleSubmit=async (e)=>{
    e.preventDefault();
   try{
   
    const response=await fetch('http://localhost:5000/api/auth/login', {
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
        email:"",
        phone:"",
      })
      toast.success("Successfully logged in")
      navigate("/");
    }
    else{
      toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message );
    }
   }catch(err){
    console.log(err);
   }
  }

  return <>
    <section>
      <main>
        <div className='section-registration'>
        <div className='container grid grid-two-cols'>
          <div className='registration-image'>
            <img src="/images/login.png" alt="register image" widht="400" height="500"/>
          </div>

          <div className='registration-form'>
            <h1 className='main-heading mb-3'>Login form</h1>
            <br />

            <form onSubmit={hadnleSubmit} className='form'>
            
              <div>
                <label htmlFor='email'>Email:</label>
                <br />
                <input type='email' 
                name="email" 
                placeholder='email'
                value={user.email}
                id="email"
                size="50"
                required
                onChange={handleChange}
                autoComplete='off'/>
              </div>

      
              <div>
                <label htmlFor='password'>Password:</label>
                <br />
                <input type='text' 
                name="password" 
                placeholder='password'
                value={user.password}
                id="password"
                size="50"
                required
                onChange={handleChange}
                autoComplete='off'/>
              </div>
              <br />
            <button type='submit'>Login now</button>
            </form>
          </div>
        </div>
        </div>
      </main>
    </section>
  </>
}
