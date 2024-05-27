import React from 'react'
import { useAuth } from '../store/auth';
export const Home = () => {
  const {isLoggedIn}=useAuth();
  
  return (
   <>
    <main>
      <section className='heroSection'>
        <div className='container grid grid-two-cols'>
          <div className='hero-content'>
            <p>We are the best IT Companyt</p>
            <h1>Welcome to Soumir's technical</h1>
            <p>
                Embark on a transformative journey with our IT services, 
                where cutting-edge solutions meet seamless integration 
                for an unparalleled business experience. Our seasoned
                professionals bring a wealth of expertise, crafting innovative
                strategies tailored to your unique needs. Security is our 
                top priority, with robust measures ensuring the safeguarding 
                of your digital assets in today's dynamic landscape.
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
