import React from 'react'

export default ({ children }) => (
  <div className='card rounded-lg shadow animated fadeIn'>
    <div className='card-body d-flex flex-column justify-content-center align-items-center h-100'>
      {children}
    </div>
  </div>
)
