import axios from "axios";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { login } from "./actions";

// Container component for the Login Presentational component

// Contains all of the logic (and no presentation) for the Login component

const verifyAndRedirect = async (e, loginActionCreator, history) => {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;
  const res = await axios.post("/login", { username, password });
  if (res.data) {
    loginActionCreator();
    history.push("/dashboard");
  } else history.push("/error");
};

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  verify: verifyAndRedirect
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
