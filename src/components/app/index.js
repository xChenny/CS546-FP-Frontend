import { connect } from 'react-redux'
import App from './App'

// Container Component for connecting App Component with Redux

const mapStateToProps = state => ({
  loginState: state.loginState
})

export default connect(
  mapStateToProps
)(App)
