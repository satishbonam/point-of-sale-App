import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { checkAuth } from "../Redux/Auth/actions";
import RoutesLogin from "./LoginRoutes/RoutesLogin";
import RoutesAdmin from "./AdminRoutes/RoutesAdmin";
import RoutesEmployee from "./EmployeeRoutes/RoutesEmployee";
import RoutesVendor from "./VendorRoutes/RoutesVendor";

const Routes = (props) => {
  const { role, isAuth, checkAuth, token } = props;
  const history = useHistory();

  useEffect(() => {
    checkAuth(token);
  }, [token]);

  return isAuth && role === "admin" ? (
    <RoutesAdmin />
  ) : isAuth && role === "vendor" ? (
    <RoutesVendor />
  ) : isAuth && role === "employee" ? (
    <RoutesEmployee />
  ) : (
    <>
      <RoutesLogin />
      <Redirect to="/login" />
    </>
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
