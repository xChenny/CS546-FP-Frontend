import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "./Card";
import CrossIcon from "./CrossIcon";

// Component used to render all of the files
// available to the user on the dashboard

class Files extends Component {
  getExtension(filename) {
    if (filename.indexOf(".") !== -1)
      return filename
        .split(".")
        .slice(-1)
        .pop()
        .toLowerCase();
  }

  async deleteFile(fileName) {
    console.log(`Deleting ${fileName}`);
    const promise = await axios.post(`/s3/delete/${fileName}`);
    if (promise.data) {
      this.props.removeFile(fileName);
    } else console.log("File deletion failed!");
  }

  render() {
    const gridStyle = {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr"
    };
    const { files } = this.props;
    const imageType = /jpeg|jpg|png|gif|mp4|pdf/;

    return (
      <div className="grid" style={gridStyle}>
        {files.map((file, index) => {
          const filename = file.Key;
          const ext = this.getExtension(filename);
          const url = imageType.test(ext)
            ? `/image/${filename}`
            : `/editor/${filename}`;
          return (
            <Card key={index} style={{ backgroundColor: "white" }}>
              <CrossIcon
                color="black"
                onClick={() => this.deleteFile(file.Key)}
              />
              <Link to={url}>
                <p>{file.Key}</p>
              </Link>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default Files;
