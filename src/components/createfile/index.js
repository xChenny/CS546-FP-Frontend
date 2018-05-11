import React from 'react'
// import { connect } from "react-redux";
import axios from "axios";
import CreateNewFile from "./CreateFile";

// Container Component for connecting the 'create new file' Component with Redux


// Auxiliary functions

const noExtErr = (name) => `'${name}' is an invalid Filename! Files 
                              must contain an extension. ie: ".txt", ".js"`

const serverErr = 'Something is currently wrong with the server. Please refresh and try again.'
                            
export const onSubmit = async (e, name, history) => {
  e.preventDefault();
  if (!name.indexOf('.')) this.setState({err: noExtErr(name)})
  const promise = await axios.post(`/s3/${name}`, { text: "" });
  // if (promise.data) history.push(`/editor/${name}`);
  if (false) history.push(`/editor/${name}`);
  else this.setState({err: serverErr})
};

// function that maps the parts of the state we want to the component
// const mapStateToProps = state => ({
//   err: state.components.err
// });

const mapDispatchToProps = dispatch => ({
  // onSave: fileContents => dispatch(onSave(fileContents)),
  // onChangeFileType: fileType => dispatch(onChangeFileType(fileType))
  submit: onSubmit 
});

// export default connect(mapDispatchToProps)(CreateNewFile);
