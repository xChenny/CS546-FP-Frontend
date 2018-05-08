import React from 'react'
import { withRouter } from 'react-router'
import {onSubmit} from './index'

const FileNameForm = ({ history }) => {
  return (
    <form onSubmit={(e) => onSubmit(e, e.target.fileName.value, history)} method='POST'>
      <aside>File Name:</aside>
      <input type='text' name='fileName' />
      <br />
      <button type='submit'>Submit</button>
      <br />
    </form>
  )
}
export default withRouter(FileNameForm)
