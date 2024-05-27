import React from 'react'

export const ServiceComponent = ({serv}) => {
  return (
    <>
    
        {/* <div>
            <p>{props.provider}</p>
            <p>{props.price}</p>
        </div>
        <h1>{props.service}</h1>
        <p>{props.description}</p> */}

        <div className='card'>
            <div className='card-img'>
              <img src='/images/web-services.png' alt="asd" />
            </div>
            <div className='card-details'>
              <div className='grid grid-two-cols'>
                <p>{serv.provider}</p>
                <p>{serv.price}</p>
              </div>
              <h2>{serv.service}</h2>
              <p>{serv.description}</p>
            </div>
          </div>
       
    </>
  )
}
