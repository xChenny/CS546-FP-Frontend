import React, { Component } from 'react';
import LoginForm from './LoginForm'
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }
}

export default App;
