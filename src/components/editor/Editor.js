import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import MonacoEditor from "react-monaco-editor";
import Pdf from "../imageviewer/Pdf";

// Component for the File Editor View

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: this.props.match.params.id,
      fileType: "",
      code: ""
    };
  }

  async componentDidMount() {
    console.log("running componentDidMount");
    const { changeFile, changeFileType, getLanguage } = this.props;
    const fileName = this.props.match.params.id;
    // change redux current fileName
    changeFile(fileName);
    changeFileType(getLanguage(fileName));
    const promise = await axios.get(`/s3/${fileName}`);
    const code = promise.data;
    if (!code) {
      console.log("Error getting file from S3!");
    } else {
      this.setState({ code });
    }
  }

  // editorDidMount is not guaranteed to run after componentDidMount apparently...
  async editorDidMount(editor, monaco) {
    const { getLanguage, match } = this.props;
    const fileName = match.params.id;
    await this.setState({ fileType: getLanguage(fileName) });
    editor.focus();
    console.log(this.state.fileType);
  }

  render() {
    const { onSave, downloadFile, fileName } = this.props;
    const { code, fileType } = this.state;
    const config = {
      options: {
        selectOnLineNumbers: true
      },
      requireConfig: {
        url:
          "https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.1/require.min.js",
        paths: {
          vs:
            "https://as.alipayobjects.com/g/cicada/monaco-editor-mirror/0.6.1/min/vs"
        }
      }
    };
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center", color: "white" }}>{fileName}</h1>
        <div
          className="max-width-height"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 10fr 1fr 5fr 1fr"
          }}
        >
          <div className="spacer" />
          <div className="editor-container" style={{ width: "100%" }}>
            <MonacoEditor
              language={fileType}
              value={code}
              onChange={e => {
                this.setState({ code: e });
              }}
              options={config.options}
              requireConfig={config.requireConfig}
              editorDidMount={this.editorDidMount.bind(this)}
            />
          </div>
          <div className="spacer" />
          <div className="editor-container" style={{ width: "100%" }}>
            <div className="editor-buttons">
              <button
                className="btn btn-inverse"
                onClick={() => onSave(fileName, code)}
              >
                SAVE
              </button>
              <button
                className="btn btn-inverse"
                onClick={() => downloadFile(fileName, code)}
              >
                Download
              </button>
            </div>
            {fileType && fileType === "md" ? <Pdf file={'pdf data'} /> : <p />}
            <hr />
          </div>
          <div className="spacer" />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Editor);
