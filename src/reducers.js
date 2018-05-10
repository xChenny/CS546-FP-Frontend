import { combineReducers } from 'redux'

import loginState from './components/login/authReducer'

// A method that combines all of the reducers into one reducer so that the app can scale

export default combineReducers({
  loginState
})
