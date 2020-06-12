import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { checkAuth } from "../Redux/Auth/actions";
import RoutesLogin from "./LoginRoutes/RoutesLogin";

const Routes = (props) => {
  const { role, isAuth, checkAuth, token } = props;
  const history = useHistory();

  useEffect(() => {
    checkAuth(token);
  }, [token]);

  return isAuth && role === "admin" ? (
    <div>admin</div>
  ) : isAuth && role === "vendor" ? (
    <div>vendor</div>
  ) : isAuth && role === "employee" ? (
    <div>employee</div>
  ) : (
    <Redirect to="/login" />
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  token: state.auth.token,
  role: state.auth.role,
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth: (payload) => dispatch(checkAuth(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
