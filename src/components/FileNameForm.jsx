import React from 'react'

const FileNameForm = () => {
  return (
    <form action='/create/file' method='POST'>
      <aside>File Name:</aside>
      <input type='text' name='fileName' />
      <br />
      <button type='submit'>Submit</button>
      <br />
    </form>
  )
}
export default FileNameForm
