import React from "react";
import { withRouter } from "react-router";
import { onSubmit } from "./index";

// Component used for Uploading new files

const FileUploadForm = ({ history }) => {
  return (
    <form onSubmit={e => onSubmit(e, history)} encType="multipart/form-data">
      <aside>File Upload:</aside>
      <input type="file" name="fileUpload" />
      <br />
      <button type="submit">Submit</button>
      <br />
    </form>
  );
};
export default withRouter(FileUploadForm);
