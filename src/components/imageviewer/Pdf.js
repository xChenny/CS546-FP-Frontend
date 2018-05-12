import React, { Component } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";

export default class Pdf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
      range: props.file.Body.data
    };
  }

  convertData(range) {
    const len = range.length;
    let bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) bytes[i] = range.charCodeAt(i);
    return bytes;
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    let { pageNumber, numPages, range } = this.state;
    // console.log(range);
    return (
      <div>
        <Document file={{ data: range }} onLoadSuccess={this.onDocumentLoad}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        {/* <iframe
          title="file"
          style={{ width: "100%", height: "100%" }}
          src={range}
        /> */}
      </div>
    );
  }
}

// import React from "react";
// import PDF from "react-pdf-js";

// export default class Pdf extends React.Component {
//   state = {};

//   onDocumentComplete = pages => {
//     this.setState({ page: 1, pages });
//     console.log("done!: ", pages);
//   };

//   onPageComplete = page => {
//     this.setState({ page });
//   };

//   handlePrevious = () => {
//     this.setState({ page: this.state.page - 1 });
//   };

//   handleNext = () => {
//     this.setState({ page: this.state.page + 1 });
//   };

//   renderPagination = (page, pages) => {
//     let previousButton = (
//       <li className="previous" onClick={this.handlePrevious}>
//         <a href="#">
//           <i className="fa fa-arrow-left" /> Previous
//         </a>
//       </li>
//     );
//     if (page === 1) {
//       previousButton = (
//         <li className="previous disabled">
//           <a href="#">
//             <i className="fa fa-arrow-left" />
//             Previous
//           </a>
//         </li>
//       );
//     }
//     let nextButton = (
//       <li className="next" onClick={this.handleNext}>
//         <a href="#">
//           Next <i className="fa fa-arrow-right" />
//         </a>
//       </li>
//     );
//     if (page === pages) {
//       nextButton = (
//         <li className="next disabled">
//           <a href="#">
//             Next <i className="fa fa-arrow-right" />
//           </a>
//         </li>
//       );
//     }
//     return (
//       <nav>
//         <ul className="pager">
//           {previousButton}
//           {nextButton}
//         </ul>
//       </nav>
//     );
//   };

//   render() {
//     let pagination = null;
//     if (this.state.pages) {
//       pagination = this.renderPagination(this.state.page, this.state.pages);
//     }
//     console.log(this.props.file);
//     return (
//       <div>
//         <PDF
//           file={{url: this.props.file}}
//           onDocumentComplete={this.onDocumentComplete}
//           onPageComplete={this.onPageComplete}
//           page={this.state.page}
//         />
//         {pagination}
//       </div>
//     );
//   }
// }
