import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import FormPage from './FormPage'
import DashPage from './Dashboard'
import Error from './Error'
import Editor from './Editor'
import FileName from './ChangeFileName'

import '../style/App.css'

class App extends Component {
  renderSignup () {
    return FormPage('signup')
  }
  renderLogin () {
    return FormPage('login')
  }

  render () {
    return (
      <Router>
        <div className='App'>
          <Route path='/signup' render={this.renderSignup} />
          <Route path='/login' render={this.renderLogin} />
          <Route path='/dashboard' component={DashPage} />
          <Route path='/error' component={Error} />
          <Route path='/editor/:id' component={Editor} />
          <Route path='/newfile' component={FileName} />
        </div>
      </Router>
    )
  }
}

export default App
