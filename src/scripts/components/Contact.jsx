import React from 'react'
import { Link } from '@reach/router'

import Container from './Container'
import Card from './Card'

export default ({ data }) => {
  const formRef = React.createRef()
  return (
    <Container>
      <Card>
        <form
          ref={formRef}
          action={data.formSubmit}
          method='post'
          className='form-group mb-0 w-100 h-100'
        >
          <div className=''>
            <label htmlFor='name' className='mb-1'>
              Name
            </label>
            <input
              type='text'
              id='user_name'
              placeholder='Enter Name'
              className='form-control mb-2'
              required
            />
          </div>
          <div className=''>
            <label htmlFor='mail' className='mb-1'>
              E-Mail
            </label>
            <input
              type='email'
              id='user_mail'
              placeholder='Enter E-Mail'
              className='form-control mb-2'
              required
            />
          </div>
          <div className=''>
            <label htmlFor='msg' className='mb-1'>
              Message
            </label>
            <textarea
              name='user_message'
              placeholder='Enter Message'
              id='msg'
              rows='5'
              className='form-control mb-2'
              required
            />
          </div>
          <div className='text-center text-shadow animated tada'>
            <Link to='/' className='mx-2 my-0 py-0'>
              <i className='fas fa-chevron-circle-left' />
            </Link>
            <a
              href='#'
              className='mx-2 my-0 py-0'
              onClick={() => formRef.current.submit()}
            >
              <i className='fas fa-paper-plane' />
            </a>
          </div>
        </form>
      </Card>
    </Container>
  )
}
