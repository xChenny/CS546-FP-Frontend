// Action creators used for Redux

export const changeFile = (fileName) => {
  console.log(`Changing filename to: ${fileName}`)
  return {
    type: 'CHANGE_FILE',
    fileName
  }
}

// I don't want to store the whole file contents in the state.
// I'd imagine it makes the store slower
// export const saveFile = (fileContents) => {
//   return {
//     type: 'SAVE_FILE',
//     fileContents
//   }
// }

export const onChangeFileType = (fileType) => {
  return {
    type: 'CHANGE_FILE_TYPE',
    fileType
  }
}
