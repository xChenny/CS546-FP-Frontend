import React from "react";
import { withRouter } from "react-router";
// import { onSubmit } from "./index";

const FileNameForm = ({ submit, history, msg }) => {
  return (
    <React.Fragment>
      { msg ? <p>{msg}</p> : <p>No message</p>}
      <form onSubmit={e => submit(e, e.target.fileName.value, history)}>
        <aside>File Name:</aside>
        <input type="text" name="fileName" />
        <br />
        <button type="submit">Submit</button>
        <br />
      </form>
    </React.Fragment>
  );
};
export default withRouter(FileNameForm);
