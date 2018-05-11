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
        <div className="hero">
          <h1
            style={{ color: "white", textAlign: "center", paddingTop: "30px" }}
          >
            Welcome to the Dashboard
          </h1>
        </div>
        <div className="dashboard-content">
          <Card>
            <Sidebar />
          </Card>
          <Card>
            <Files files={this.state.files} />
          </Card>
        </div>
      </div>
    );
  }
}
