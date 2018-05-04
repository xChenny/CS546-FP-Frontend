import React from "react";
import axios from "axios";
import { Redirect } from "react-router"

const createFile = e => {
  const fn = e.target.fileName.value;
  axios.post(`/s3/${fn}`);
  return (<Redirect to={`/editor/${fn}`}/>)
};

const FileNameForm = () => {
  return (
    <form onSubmit={e => createFile(e)}>
      <aside>File Name:</aside>
      <input type="text" name="fileName" />
      <br />
      <button type="submit">Submit</button>
      <br />
    </form>
  );
};
export default FileNameForm;
