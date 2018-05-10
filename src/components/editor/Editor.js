import React, { Component } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import MonacoEditor from "react-monaco-editor";

// Component for the File Editor View

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filename: this.props.match.params.id
    };
  }

  onSave(filename, text) {
    axios.post(`/s3/${filename}`, { text });
  }

  async componentDidMount() {
    const { filename } = this.state;
    const filePromise = await axios.get(`/s3/${filename}`);
    const code = filePromise.data;
    if (!code) return;
    console.log(code);
    await this.setState({ code });
  }

  async editorDidMount(editor, monaco) {
    editor.focus();
  }

  render() {
    const { filename, code } = this.state;
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
        <button onClick={() => this.onSave(filename, code)}>SAVE</button>
        <MonacoEditor
          width="800"
          height="600"
          language="javascript"
          value={code}
          onChange={e => {
            this.setState({ code: e });
          }}
          options={config.options}
          requireConfig={config.requireConfig}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}

export default withRouter(Editor);
