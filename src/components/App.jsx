import React, { Component } from 'react';
import LoginForm from './LoginForm'
import Card from './Card'
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card>
          <LoginForm />
        </Card>
      </div>
    );
  }
}

export default App;
