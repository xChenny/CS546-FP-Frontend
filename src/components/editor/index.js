import axios from "axios";
import { connect } from "react-redux";
import Editor from "./Editor";
import { changeFile, onChangeFileType } from "./actions";
import { languages } from "./languages";

// Container Component for connecting Editor Component with Redux

// function for downloading the current file in the editor
const downloadFile = (filename, text) => {
  var file = document.createElement("a");
  file.setAttribute("target", "_blank");
  file.setAttribute("href", "data:text/plain," + encodeURIComponent(text));
  file.setAttribute("download", filename);
  document.body.appendChild(file);
  file.click();
  document.body.removeChild(file);
};

// function for saving the current files in the editor to S3
// filename => string
// text => string
// save => func
const onSave = (filename, text) => {
  axios.post(`/s3/${filename}`, { text });
  // save(text);
};

// function for getting file extension from the filename
const getLanguage = filename => {
  if (filename.indexOf(".")) {
    const ext = filename
      .split(".")
      .slice(-1)
      .pop();
    return languages[ext];
  }
};

const getExtension = filename => {
  if (filename.indexOf(".") !== -1)
    return filename
      .split(".")
      .slice(-1)
      .pop()
      .toLowerCase();
};
const mapStateToProps = state => ({
  loggedIn: state.loginState.loggedIn,
  fileType: state.editorState.fileType,
  fileName: state.editorState.fileName
});

const mapDispatchToProps = dispatch => ({
  onSave,
  downloadFile,
  getLanguage,
  getExtension,
  changeFile: fileName => dispatch(changeFile(fileName)),
  changeFileType: fileType => dispatch(onChangeFileType(fileType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
