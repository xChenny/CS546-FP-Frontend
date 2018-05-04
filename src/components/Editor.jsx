import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import MonacoEditor from 'react-monaco-editor'
import ChangeFileName from './ChangeFileName';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      code: "var thing = 'thing'"
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const filePromise = await axios.get(`/s3/${id}`);
    const file = filePromise.data;
    if (!file) return;
    console.log(file);
    await this.setState({ file });
  }

  async editorDidMount(editor, monaco) {
    editor.focus();
  }

  render () {
    const { code, file } = this.state
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
        <MonacoEditor
          width="800"
          height="600"
          language="javascript"
          value={file}
          options={config.options}
          requireConfig={config.requireConfig}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}

export default withRouter(Editor);
