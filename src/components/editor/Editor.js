import React, { Component } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import MonacoEditor from "react-monaco-editor";

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
    console.log('running componentDidMount')
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
    const fileName = match.params.id
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
      <div>
        <Link to="/dashboard">
          <button>HOME</button>
        </Link>
        <button onClick={() => onSave(fileName, code)}>SAVE</button>
        <button onClick={() => downloadFile(fileName, code)}>Download</button>
        <MonacoEditor
          width="600"
          height="800"
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
    );
  }
}

export default withRouter(Editor);
