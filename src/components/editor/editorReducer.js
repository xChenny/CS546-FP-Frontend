// Reducer for the Editor component

// Used to interpret what needs to change in the state
// when an action is "dispatched"

const editorState = (state = {fileType: '', fileName: ''}, action) => {
  switch (action.type) {
    case 'CHANGE_FILE':
      return {
        ...state,
        fileName: action.fileName
      }
    case 'CHANGE_FILE_TYPE':
      return {
        ...state,
        fileType: action.fileType
      }
    default:
      return state
  }
}
export default editorState
