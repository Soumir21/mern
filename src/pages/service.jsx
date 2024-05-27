import React from 'react'
import { useAuth } from '../store/auth';
import { ServiceComponent } from '../components/ServiceComponent';
export const Service = () => {
  const {service}=useAuth();
  console.log(service);
  return (
    <>
      {/* <div className='container grid grid-three-cols'>
        <div>
           {service.map((serv)=>ServiceComponent(serv))}{service.map((serv)=>ServiceComponent(serv))}
    
        </div>
       
      
      </div> */}

      <section className='section-services'>
        <div className='container'>
          <h1 className='main-heading'>Services</h1>
        </div>

        <div className='container grid grid-three-cols'>
          {/* <div className='card'>
            <div className='card-img'>
              <img src='/images/web-services.png' alt="asd" />
            </div>
            <div className='card-details'>
              <div className='grid grid-two-cols'>
                <p>provider</p>
                <p>price</p>
              </div>
              <h2>Service</h2>
              <p>description</p>
            </div>
          </div> */}
          {service.map((serv)=><ServiceComponent serv={serv} />)}
          
        </div>
      </section>
     
    </>
  )
}
