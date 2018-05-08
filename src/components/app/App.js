import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import axios from 'axios'

import Homepage from '../Homepage'
import FormPage from '../FormPage'
import DashPage from '../Dashboard'
import Editor from '../Editor'

import '../../style/App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loginState: props.loginState
    }
  }

  async componentWillReceiveProps (nextProps) {
    await this.setState({
      loginState: nextProps.loginState
    })
    console.log(this.state.loginState.loggedIn)
  }

  componentDidMount () {
    console.log(this.state.loginState.loggedIn)
  }

  async login (user, password) {
    if (this.state.loggedIn) return
    const response = axios.post('/login', {user, password})
    if (response.data) this.setState({loggedIn: true})
  }

  render () {
    return (
      <Router>
        <div className='App'>
          {/* Doesn't Require Auth */}
          <Route exact path='/' component={Homepage} />
          <Route exact path='/signup' render={() => FormPage('signup')} />
          <Route exact path='/login' render={() => FormPage('login')} />

          {/* Requires Auth */}
          <Route path='/dashboard' component={DashPage} />
          <Route path='/error' render={() => FormPage('error')} />
          <Route path='/editor/:id' component={Editor} />
          <Route path='/newfile' render={() => FormPage('filename')} />

        </div>
      </Router>
    )
  }
}

export default App
