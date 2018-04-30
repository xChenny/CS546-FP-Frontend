import React, { Component } from 'react'
import axios from 'axios'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileUrls: []
    }
  }

  async componentDidMount() {
    console.log("Getting file urls...")
    const files = await axios.get("http://localhost:5500/s3/all")
    console.log(files.data)

  }

  render() {
    return (
      <div className='dashboard'>
      <h1>Welcome to the Dashboard</h1>
      </div>
    )
  }
}
