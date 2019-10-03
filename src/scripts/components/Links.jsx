import React from 'react'
import { Link } from '@reach/router'

export default x =>
  Object.keys(x).map(y =>
    x[y].startsWith('http') ? (
      <a key={y} href={x[y]} className='mx-1 text-shadow mx-2'>
        <i className={y} />
      </a>
    ) : (
      <Link key={y} to={x[y]} className='mx-1 text-shadow mx-2'>
        <i className={y} />
      </Link>
    )
  )
