import React, { Component } from "react";

// Import React FilePond
import { FilePond, File, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

import { filePondSubmit } from "./index";

// Register the image preview plugin
import FilePondImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
registerPlugin(FilePondImagePreview);

// Our app
export default class Filepond extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: []
    };
  }

  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  }

  render() {
    return (
      <div className="App" style={{ width: "600px" }}>
        {/* // Pass FilePond properties as attributes */}
        <h1 style={{ marginBottom: "40px" }}>Upload Files</h1>
        <FilePond
          ref={ref => (this.pond = ref)}
          allowMultiple={true}
          server="/s3/dummy/dummy"
          oninit={() => this.handleInit()}
          onaddfile={(err, file) => {
            if (err) alert("File Upload failed!");
            else {
              filePondSubmit(file.file, file.filename);
            }
          }}
        >
          {this.state.files.map(file => <File key={file} source={file} />)}
        </FilePond>
      </div>
    );
  }
}
