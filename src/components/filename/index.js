import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'

export const onSubmit = async (e, name, history) => {
  e.preventDefault()
  const promise = await axios.post(`/s3/${name}`, {text: ''})
  if (promise.data)
    history.push(`/editor/${name}`)
}
