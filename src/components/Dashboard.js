import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import Files from "./Files";
import Sidebar from "./Sidebar";

// Dashboard component used to present the files and other information that the user
// has access to

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { files: [] };
  }

  async componentDidMount() {
    console.log("Getting file urls...");
    const filesPromise = await axios.get("/s3/all");
    const files = filesPromise.data;
    await this.setState({ files });
  }

  render() {
    return (
      <div className="dashboard">
        <h1 style={{ color: "white", textAlign: "center" }}>
          Welcome to the Dashboard
        </h1>
        <Card style={{ padding: "100px", margin: "100px" }}>
          <div className="row" style={{ display: "flex" }}>
            <Sidebar />
            <Files files={this.state.files} />
          </div>
        </Card>
      </div>
    );
  }
}
