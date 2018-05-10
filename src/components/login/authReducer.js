// Reducer for the Login component

// Used to interpret what needs to change in the state
// when an action is "dispatched"

const loginState = (state = {loggedIn: false}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loggedIn: true
      }
    case 'LOGOUT':
      return {
        ...state,
        loggedIn: false
      }
    default:
      return state
  }
}
export default loginState
