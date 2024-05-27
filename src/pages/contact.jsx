import React, { useState } from 'react'
import { useAuth } from '../store/auth'
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const {user}=useAuth();
  const navigate=useNavigate();
  const [contact, setContact]=useState({
    email:"",
    phone:"",
    message:"",
    
  })

  const [userData,setUserData]=useState(true);

  if(userData && user){
    setContact({
      username:user.username,
      email:user.email,
      message:""
    })

    setUserData(false);
  }


  const handleChange=(e)=>{
    e.preventDefault();
    setContact({
      ...contact,
      [e.target.name]:e.target.value
    })
  }

  const hadnleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const response=await fetch('http://localhost:5000/api/contact', {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(contact)
      
    })
    
    if(response.ok){
    navigate("/");
    }
    else{
      alert("Post could not be submiited");
    }
    
    }catch(err){
      console.log("Post ",err)
    }
    
   
  }

  return <>
    <section>
      <main>
        <div className='section-registration'>
        <div className='contact-container'>
        <div>
        <h1 className='main-heading mb-3'>Contact Us</h1>
        <hr className='cotact-line'/>
        </div>
      
        <div className='grid grid-two-cols'>

          <div className='registration-image'>
            <img src="/images/contact.png" alt="register image" width="100%" height="auto"/>
          </div>

          <div className='registration-form'>
            <br />

            <form onSubmit={hadnleSubmit}  className='form'>
              
            <div>
                <h2>username</h2>
               
                <input type='text' 
                name="username" 
                placeholder='username'
                value={contact.username}
                id="username"
                required
                size="50"
                onChange={handleChange}
                autoComplete='off'/>
              </div>

              <div>
                <h2>Email</h2>
               
                <input type='email' 
                name="email" 
                placeholder='email'
                value={contact.email}
                id="email"
                required
                size="50"
                onChange={handleChange}
                autoComplete='off'/>
              </div>

      
              <div>
                <h2>Message</h2>
                <textarea
                name="message" 
                placeholder='message'
                value={contact.message}
                id="message"
                required
                rows="10" cols="53"
                onChange={handleChange}
                autoComplete='off'/>
              </div>

           
            <button type='submit'>Submit</button>
          
            </form>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.4616925795003!2d91.71937457610305!3d26.116485293852925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5ba775e62b59%3A0x312ce06e87b8fb2!2sISBT%3A%20Guwahati%20(Inter%20State%20Bus%20Terminus)!5e0!3m2!1sen!2sin!4v1703523620371!5m2!1sen!2sin"
         width=" 100%" height="450" style={{border:'none'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
        </div>
      </main>
    </section>
  </>
}
