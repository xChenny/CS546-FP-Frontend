import { connect } from "react-redux";
import Dashboard from "./Dashboard";

// Container component for the Dashboard Presentational component

// Contains all of the logic (and no presentation) for the Dashboard component

const mapStateToProps = state => ({
  username: state.loginState.username
});

export default connect(mapStateToProps)(Dashboard);
