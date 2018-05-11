// Action creators used for Redux for the login component

export const login = (username) => {
  return {
    type: 'LOGIN',
    username: username
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}
