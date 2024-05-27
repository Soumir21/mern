import React from 'react'
import { useAuth } from '../store/auth'
export const About = () => {
  const {user}=useAuth();
  return (
    <>
    <main>
      <section className='heroSection'>
        <div className='container grid grid-two-cols'>
          <div className='hero-content'>

            <p>Welcome {user.username?user.username:"To our website"}</p>
            <h1>Why to choose us?</h1>
            <p>
            Cutting-edge Solutions: Elevate your business with our IT services, 
            offering innovative solutions tailored to your unique needs.
            </p>
            <p> Seamless Integration: Experience smooth transitions as our experts seamlessly
             integrate advanced technologies into your existing infrastructure.
            </p>
            <p>Robust Security: Trust in our proactive security measures to safeguard your 
            digital assets, ensuring a protected and resilient business environment.
            </p>
            <p>Client-Focused Excellence: Benefit from our client-centric approach, providing
             responsive support and clear communication to drive your success in the digital
              landscape.
            </p>
            <div className='btn btn-group'>
              <a href='/contact'>
                <button className='btn'>connect now</button>
              </a>
              <a href='/services'>
                <button className='btn secondary-btn'>Learn more</button>
              </a>
            </div>
          </div>
          {/* hero image */}

          <div className='hero-image'>
            <img src='/images/heroSection.png'
             alt='hero section image'
            width='700'
            height='500'
             />
          </div>
        </div>
      </section>
      <section className='section analytics'>
        <div className='container grid grid-four-cols'>
          <div className='borderDiv'>
            <h1>
              <h1>50+</h1>
              <p>Registered Companies</p>
            </h1>
          </div>
          <div className='borderDiv'>
            <h1>
              <h1>100,000+</h1>
              <p>Happy Customers</p>
            </h1>
          </div>
          <div className='borderDiv'>
            <h1>
              <h1>500+</h1>
              <p>Well known developers</p>
            </h1>
          </div>
          <div >
            <h1>
              <h1>24/7</h1>
              <p>services</p>
            </h1>
          </div>
        </div>
      </section>
    </main>
</>
  )
}
