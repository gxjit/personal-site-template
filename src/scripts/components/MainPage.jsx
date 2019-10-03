import React from 'react'

import Container from './Container'
import Card from './Card'
import Links from './Links'

export default ({ data }) => {
  return (
    <Container>
      <Card>
        <div id='img-div' className='d-block mx-auto mb-2 mt-1 w-35'>
          <img
            src={data.imgPath}
            alt='Avatar'
            className='rounded-circle d-block mw-100 mh-100 shadow'
          />
        </div>
        <div className='text-center mb-2'>
          <h1 className='text-secondary text-shadow'>{data.title}</h1>
          <h2 className='lead text-secondary text-shadow'>{data.subtitle}</h2>
          <hr className='mx-5 text-shadow mb-2' />
        </div>
        <div className='text-center animated tada'>{Links(data.links)}</div>
      </Card>
      <footer className='mt-5 text-center'>
        &copy; <small>Gurjit Singh</small>
      </footer>
    </Container>
  )
}
