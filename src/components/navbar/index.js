import axios from "axios";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { logout } from "../login/actions";

// Container component for the Navbar Presentational component

// Contains all of the logic (and no presentation) for the Navbar component

const mapStateToProps = state => ({
  loggedIn: state.loginState.loggedIn,
  username: state.loginState.username
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
