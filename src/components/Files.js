import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

// Component used to render all of the files
// available to the user on the dashboard

class Files extends Component {
  async deleteFile(history, fileName) {
    const promise = await axios.post(`/s3/delete/${fileName}`);
    if (promise.data) {
      console.log("boi");
      history.push("/dashboard");
    }
  }

  getExtension(filename) {
    if (filename.indexOf(".")) {
      const tokens = filename.split(".");
      return tokens[tokens.length - 1];
    }
  }

  render() {
    const gridStyle = {
      width: '100%',
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr"
    };

    const { history, files } = this.props;
    const imageType = /jpeg|jpg|png|gif|pdf/;

    return (
      <div className="grid" style={gridStyle}>
        {files.map((file, index) => {
          const filename = file.Key;
          const ext = this.getExtension(filename);
          const isImage = imageType.test(ext.toLowerCase());
          const url = isImage ? `/image/${filename}` : `/editor/${filename}`;
          return (
            <Card key={index}>
              <Link to={url}>
                <p>{file.Key}</p>
              </Link>
              <span
                className="fui-cross"
                onClick={() => this.deleteFile(history, file.Key)}
              />
            </Card>
          );
        })}
      </div>
    );
  }
}

export default withRouter(Files);
