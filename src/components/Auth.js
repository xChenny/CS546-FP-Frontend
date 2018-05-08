import React from 'react'
import Error from './Error'
import { withRouter } from 'react-router'

const Auth = ({ loginState, path, desiredComponent }) => {
  const { history } = this.props
  const url = loginState ? path : '/error'
  history.push(url)
  return (
    loginState ? <Error /> : <desiredComponent />
  )
}

export default withRouter(Auth)
