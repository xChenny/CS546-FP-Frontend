import React from 'react'
import Card from './Card'

import LoginForm from './login'
import SignupForm from './signup/SignupForm'
import FileNameForm from './filename/FileNameForm'
import FileUploadForm from './fileupload/FileUploadForm'
import Error from './Error'

// A multi-purpose presentational component that renders a Card component
// the various forms that we have for the user

const FormPage = (view) => {
  let page = 0
  switch (view) {
    case 'login':
      page = <LoginForm />
      break
    case 'signup':
      page = <SignupForm />
      break
    case 'upload':
      page = <FileUploadForm />
      break
    case 'error':
      page = <Error />
      break
    default:
      page = <FileNameForm />
  }

  return (
    <Card>
      {page}
    </Card>
  )
}

export default FormPage
