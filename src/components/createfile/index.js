import { connect } from "react-redux";
import axios from "axios";
import CreateNewFile from "./CreateFile";

// Container Component for connecting the 'create new file' Component with Redux

// Auxiliary functions
const onSubmit = async (e, name, history) => {
  e.preventDefault();
  const promise = await axios.post(`/s3/${name}`, { text: "" });
  if (promise.data) history.push(`/editor/${name}`);
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

export default connect(mapDispatchToProps)(CreateNewFile);
