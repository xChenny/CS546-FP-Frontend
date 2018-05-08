import React from 'react'
import axios from 'axios'

export const onSubmit = (e, name, history) => {
  e.preventDefault()
  axios.post(`/s3/${name}`, {text: ''})
  // history.push(`/editor/${name}`)
  return (<Redirect to={`/editor/${name}`} />)
}
