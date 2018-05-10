import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Editor from "./Editor";

// Container Component for connecting Editor Component with Redux

const mapStateToProps = state => ({
  loggedIn: state.loginState.loggedIn
});

const mapDispatchToProps = dispatch => ({
  onSave
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
