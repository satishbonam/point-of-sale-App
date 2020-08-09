import React, { useEffect } from "react";
import { connect } from "react-redux";
import DisplayChart from "../../Components/Employee/DisplayChart";
import { checkAuth } from "../../Redux/Auth/actions";

const Stats = (props) => {
  const { checkAuth, token } = props;

  // useEffect(() => {
  //   checkAuth({ auth_token: token });
  // }, [token]);

  return (
    <div style={{ margin: "100px 50px 50px 50px" }}>
      <DisplayChart />
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth: (payload) => dispatch(checkAuth(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
