import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import MonacoEditor from 'react-monaco-editor'

class Editor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      code: "var thing = 'thing'"
    }
  }

  async editorDidMount (editor, monaco) {
    // console.log('editorDidMount', editor)
    const { id } = this.props.location
    const codes = await axios.get(`/s3/${id}`)
    console.log(codes)
    editor.focus()
  }

  onChange (newValue, e) {
    console.log('onChange', newValue, e)
  }

  render () {
    const { code } = this.state
    const config = {
      options: {
        selectOnLineNumbers: true
      },
      requireConfig: {
        url: 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.1/require.min.js',
        paths: {
          vs: 'https://as.alipayobjects.com/g/cicada/monaco-editor-mirror/0.6.1/min/vs'
        }
      }
    }
    return (
      <div>
        <MonacoEditor
          width='800'
          height='600'
          language='javascript'
          value={code}
          options={config.options}
          requireConfig={config.requireConfig}
          editorDidMount={this.editorDidMount}
        />
      </div>
    )
  }
}

export default withRouter(Editor)
