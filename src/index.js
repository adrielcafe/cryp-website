// @flow

// React
import React from 'react'
import ReactDOM from 'react-dom'
// Components
import Intro from './components/intro'
import Smartphone from './components/smartphone'
// CSS
import './index.css'
import './css/stars.css'
// Misc
import registerServiceWorker from './registerServiceWorker'

const App = () => (
  <main className="row center-xs bottom-md">
    <div id="stars-bg">
      <div />
      <div />
      <div />
    </div>
    <div className="col-xs-11 col-sm-10">
      <div className="row">
        <Intro />
        <Smartphone />
      </div>
    </div>
  </main>
)

const root = document.getElementById('root')
if (root != null) ReactDOM.render(<App />, root)

registerServiceWorker()
