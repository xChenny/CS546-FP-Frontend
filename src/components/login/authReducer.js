// Reducer for the Login component

// Used to interpret what needs to change in the state
// when an action is "dispatched"

const loginState = (state = {loggedIn: false, username: 'no user'}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loggedIn: true,
        username: action.username
      }
    case 'LOGOUT':
      return {
        ...state,
        loggedIn: false,
        username: undefined
      }
    default:
      return state
  }
}
export default loginState
