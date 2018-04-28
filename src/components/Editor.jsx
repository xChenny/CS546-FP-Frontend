import React, { Component } from "react";
import MonacoEditor from "react-monaco-editor";

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "var thing = 'thing'"
    };
  }

  editorDidMount(editor, monaco) {
    console.log("editorDidMount", editor);
    editor.focus();
  }

  render() {
    const { code } = this.state;
    const config = {
      options: {
        selectOnLineNumbers: true
      },
    };
    return (
      <div>
        <MonacoEditor
          width="800"
          height="600"
          language="javascript"
          theme="vs-dark"
          value={code}
          options={config.options}
        />
      </div>
    );
  }
}
