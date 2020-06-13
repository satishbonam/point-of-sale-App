import React from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "../../Components/Admin/NavBar";
import Stats from "../EmployeeRoutes/Stats";
import Stocks from "../EmployeeRoutes/Stocks";

const RoutesAdmin = (props) => {
  const history = useHistory();
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/admin" exact render={(props) => <Stats {...props} />} />
        <Route
          path="/admin/stocks"
          exact
          render={(props) => <Stocks {...props} />}
        />
        <Route path="" render={() => <Redirect to="/admin" />} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RoutesAdmin);
