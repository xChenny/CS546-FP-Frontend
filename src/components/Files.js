import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { Redirect, withRouter } from "react-router";

class Files extends Component {

  async deleteFile (history, fileName) {
    const promise = await axios.post(`/s3/delete/${fileName}`)
    if (promise.data) {
      console.log('boi')
      history.push('/dashboard')
    }
  };

  render() {
    const gridStyle = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr"
    };

    const { history, files } = this.props

    return (
      <div className="grid" style={gridStyle}>
        {files.map((file, index) => {
          return (
            <Card>
              <Link key={index} to={`/editor/${file.Key}`}>
                <h3>{file.Key}</h3>
              </Link>
              <button onClick={() => this.deleteFile(history, file.Key)}>x</button>
            </Card>
          );
        })}
      </div>
    );
  }
};

export default withRouter(Files);
