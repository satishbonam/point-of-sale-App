import React from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "../../Components/Employee/NavBar";
import Stats from "../EmployeeRoutes/Stats";

const RoutesAdmin = (props) => {
  const history = useHistory();
  return (
    <div>
      <Switch>
        <Route path="/admin" exact render={(props) => <Stats {...props} />} />
        <Route path="" render={() => <Redirect to="/admin" />} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RoutesAdmin);
