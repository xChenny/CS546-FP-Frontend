import React, { Component } from 'react'

// Import React FilePond
import { FilePond, File, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Register the image preview plugin
import FilePondImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
registerPlugin(FilePondImagePreview);

// Our app
export default class Filepond extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: ["index.html"]
    };
  }

  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  }

  render() {
    return (
      <div className="App" style={{width: '600px'}}>
        {/* // Pass FilePond properties as attributes */}
        <FilePond
          ref={ref => (this.pond = ref)}
          server='/s3/upload'
          oninit={() => this.handleInit()}
        >
          {this.state.files.map(file => <File key={file} source={file} />)}
        </FilePond>
      </div>
    );
  }
}
