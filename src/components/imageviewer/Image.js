import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import Card from "../Card";
import Pdf from "./Pdf";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: this.props.match.params.id,
      data: ""
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const promise = await axios.get(`/s3/image/${match.params.id}`);
    const data = promise.data;
    if (data) {
      await this.setState({ data });
      // console.log(this.state.data);
    } else {
      console.log("Error getting image from S3");
    }
  }

  getExtension(filename) {
    if (filename.indexOf(".") !== -1)
      return filename
        .split(".")
        .slice(-1)
        .pop()
        .toLowerCase();
  }

  render() {
    const { data, fileName } = this.state;
    const ext = this.getExtension(fileName);
    return (
      data && ext === "pdf" ? (
        <Card>
          <Pdf file={data} />
        </Card>
      ) : (
        <Card>
          <img src={data} alt="a pic from s3" style={{ width: "100%" }} />
        </Card>
      )
    )
  }
}

export default withRouter(Image);
