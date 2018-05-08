import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = state => ({
  loginState: state.loginState
})

export default connect(
  mapStateToProps
)(App)
