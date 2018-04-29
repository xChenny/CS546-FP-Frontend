import React from 'react'
import Card from './Card'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const FormPage = (view) => {
  const page = (view === "login") ? <LoginForm /> : <SignupForm />
  return (
    <Card>
      {page}
    </Card>
  )
}

export default FormPage
