import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./Login";

const RoutesLogin = (props) => {
  return (
    <>
      <Route path="/login" render={(props) => <Login {...props} />} />
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RoutesLogin);
