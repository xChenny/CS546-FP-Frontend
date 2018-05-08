import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Editor from "./Editor";

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

const mapDispatchToProps = dispatch => ({
  onSave
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
