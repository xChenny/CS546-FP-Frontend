import React, { Component } from "react";
import axios from "axios";
import Parser from "html-react-parser";
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
      code: "",
      isMarkup: false
    };
  }

  isMarkup(fileType) {
    if (fileType === "md") {
      console.log("this file is a markdown file!");
      this.setState({ isMarkup: true });
      return true;
    }
  }

  async compileMarkdown() {
    const mdpromise = await axios.post("/mdcompile/compile", {
      md: this.state.code
    });
    const html = mdpromise.data;
    console.log(html);
    this.setState({ html });
  }

  async componentDidMount() {
    console.log("running componentDidMount");
    const {
      changeFile,
      changeFileType,
      getLanguage,
      getExtension
    } = this.props;
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
    if (await this.isMarkup(getExtension(fileName))) {
      this.compileMarkdown()
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
    const { code, fileType, isMarkup } = this.state;
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
            gridTemplateColumns: "1fr 10fr 1fr 7fr 1fr"
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
                onClick={() => {
                  if (this.state.isMarkup) {
                    this.compileMarkdown()
                  }
                  onSave(fileName, code);
                }}
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
            <hr />
            {this.state.html && isMarkup ? (
              <React.Fragment>
                <p>Rendered Markdown: </p>
                <div className="compiled-md">{Parser(this.state.html)}</div>
              </React.Fragment>
            ) : (
              <div />
            )}
          </div>
          <div className="spacer" />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Editor);
