import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import useVhFix from 'vh-fix-hook'

import MainPage from './components/MainPage'
import Contact from './components/Contact'
import LoadingPage from './components/LoadingPage'
// import GHRedirects from './components/GHRedirects'

const App = () => {
  useVhFix()

  const [data, setData] = React.useState({})
  const [fetchError, setfetchError] = React.useState(false)

  React.useEffect(() => {
    fetch('./assets/data/jsonData.json')
      .then(res => res.json())
      .then(datum => {
        setData(datum)
        document.title = datum.title
      })
      .catch(() => {
        setfetchError(true)
      })
  }, [])

  return data.title ? (
    <Router>
      <MainPage default path='/' data={data} />
      <Contact path='contact' data={data} />
      {/* <GHRedirects path=':repo' /> */}
    </Router>
  ) : (
    <LoadingPage fetchError={fetchError} />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
