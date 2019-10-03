import React from 'react'

export default ({ children }) => (
  <div className='container'>
    <div className='row vh-100-fix d-flex justify-content-center align-items-center'>
      <div className='col-12 col-sm-10 col-md-8 col-lg-6'>{children}</div>
    </div>
  </div>
)
