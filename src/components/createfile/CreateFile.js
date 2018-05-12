import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";
// import { onSubmit } from "./index";

class FileNameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      err: ""
    };
  }

  noExtErr = name => `'${name}' is an invalid Filename! Files 
                              must contain an extension. ie: ".txt", ".js"`;

  serverErr = "Something is currently wrong with the server. Please refresh and try again.";

  onSubmit = async (e, name, history) => {
    e.preventDefault();
    if (name.indexOf(".") === -1) {
      this.setState({ err: this.noExtErr(name) });
    } else {
      const promise = await axios.post(`/s3/${name}`, { text: "" });
      if (promise.data) history.push(`/editor/${name}`);
      else this.setState({ err: this.serverErr });
    }
  };

  render() {
    const { history } = this.props;
    const { err } = this.state;
    return (
      <React.Fragment>
        <h1 style={{ marginBottom: "40px" }}>Create New File</h1>
        {err ? <p>{err}</p> : <p />}
        <form
          onSubmit={e => this.onSubmit(e, e.target.fileName.value, history)}
        >
          <input
            type="text"
            name="fileName"
            placeholder="New File Name"
            className="form-control"
          />
          <br />
          <button className='btn btn-primary' type="submit">Submit</button>
          <br />
        </form>
      </React.Fragment>
    );
  }
}
export default withRouter(FileNameForm);
