import React from 'react'
import { withRouter } from 'react-router'
import {onSubmit} from './index'

const FileUploadForm = ({ history }) => {
  return (
    <form onSubmit={(e) => onSubmit(e, e.target.fileUpload.value, history)} method='POST'>
      <aside>File Upload:</aside>
      <input type='file' name='fileUpload' />
      <br />
      <button type='submit'>Submit</button>
      <br />
    </form>
  )
}
export default withRouter(FileUploadForm)
