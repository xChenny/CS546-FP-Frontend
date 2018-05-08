import React from 'react'
import Card from './Card'

import LoginForm from './login'
import SignupForm from './signup/SignupForm'
import FileNameForm from './filename/FileNameForm'
import Error from './Error'

const FormPage = (view) => {
  let page = 0
  switch (view) {
    case 'login':
      page = <LoginForm />
      break
    case 'signup':
      page = <SignupForm />
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
