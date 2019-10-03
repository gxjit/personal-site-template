import React from 'react'

export default ({ repo }) => {
  React.useEffect(() => {
    window.location.assign(`https://github.com/gxjit/${repo}`)
  })

  return null
}
