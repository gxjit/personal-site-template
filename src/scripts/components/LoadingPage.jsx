import React from 'react'

import Container from './Container'
import Card from './Card'

export default ({ fetchError }) => (
  <Container>
    <Card>
      <h1 className='text-center text-secondary text-shadow'>
        {fetchError
          ? 'Something went wrong.\nPlease try again later...'
          : 'Loading data...'}
      </h1>
    </Card>
  </Container>
)
