import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import Card from "../Card";

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
      console.log(data);
      await this.setState({ data });
      console.log(this.state.data)
    } else {
      console.log("Error getting image from S3");
    }
  }

  getExtension(filename) {
    if (filename.indexOf(".")) {
      const tokens = filename.split(".");
      return tokens[tokens.length - 1];
    }
  }

  render() {
    const { data, fileName } = this.state;
    const ext = this.getExtension(fileName);
    const emb =
      ext === "pdf" ? (
        // <embed src={data} type="application/pdf" height="700px" width="500" />
        // <iframe src={data} style={{width: '600px', height: '500px'}} frameBorder="0"></iframe>
        <embed src={data} style={{width: '100%'}} />
      ) : (
        <img src={data} alt="an image" style={{ width: "100%" }} />
      );
    return <Card>{emb}</Card>;
  }
}

export default withRouter(Image);
