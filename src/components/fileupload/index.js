import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'

export const onSubmit = (e, name, history) => {
  const filePath = name.split("\\");
  const fileName = filePath[filePath.length - 1];
  // console.log("File Name: " + fileName);
  e.preventDefault()
  axios.post(`/s3/${fileName}`, {text: ''})
  // history.push(`/editor/${name}`)
  return (<Redirect to={`/editor/${name}`} />)
}
