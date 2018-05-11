import axios from "axios";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { logout } from "../login/actions";

// Container component for the Dashboard Presentational component

// Contains all of the logic (and no presentation) for the Dashboard component

  const removeFile = (fileName) => {
    let files = this.state.files;
    files = files.filter(file => file.Key !== fileName);
    this.setState({ files });
  }

const mapStateToProps = state => ({
  username: state.loginState.username
});

const mapDispatchToProps = dispatch => ({
  removeFile
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
