import React, { Component } from 'react'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileUrls: []
    }
  }

  componentDidMount() {
    console.log("Getting file urls...")
  }

  render() {
    return (
      <div className='dashboard'>
      <h1>Welcome to the Dashboard</h1>
      </div>
    )
  }
}