import React from 'react'
import { render } from 'react-dom'
import { HomeScene } from './scenes/Home/index.jsx'

class App extends React.Component {
  render () {
    return <HomeScene />
  }
}

render(<App />, document.getElementById('app'))
