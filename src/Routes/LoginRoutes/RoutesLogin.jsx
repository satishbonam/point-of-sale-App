import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./Login";

const RoutesLogin = (props) => {
  return (
    <div>
      <Switch>
        <Route path="/login" exact render={(props) => <Login {...props} />} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RoutesLogin);
