import axios from "axios";
import { connect } from "react-redux";
import SignupForm from "./SignupForm";
import { login } from "../login/actions";

// Container component for the Signup Presentational component

// Contains all of the logic (and no presentation) for the Signup component

const signup = async (e, username, password, login, history) => {
  e.preventDefault();
  // console.log("called signup...");
  const promise = await axios.post("/create/user", { username, password });
  const data = promise.data;
  if (data) {
    login(username);
    history.push("/dashboard");
  } else {
    console.log("Signup failed!");
  }
};

const mapStateToProps = state => ({
  loggedIn: state.loginState.loggedIn
});

const mapDispatchToProps = dispatch => ({
  login: username => dispatch(login(username)),
  signup
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
