import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { files: [] };
  }

  async componentDidMount() {
    console.log("Getting file urls...");
    const filesPromise = await axios.get("http://localhost:5500/s3/all");
    const files = filesPromise.data;
    await this.setState({ files });
    console.log(this.state.files);
  }

  render() {
    const gridStyle = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr"
    }
    return (
      <div className="dashboard">
        <h1>Welcome to the Dashboard</h1>
        <div className="grid" style={gridStyle}>
        {this.state.files && this.state.files.map(file => {
          return <a href={`/editor/${file.Key}`}><Card><h3>{file.Key}</h3></Card></a>;
        })}
        </div>
      </div>
    );
  }
}
