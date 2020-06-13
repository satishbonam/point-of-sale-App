import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "../../Components/Employee/NavBar";
import Stats from "./Stats";
import Stocks from "./Stocks";
import Order from "./Order";
import DashBoard from "./DashBoard";

const RoutesEmployee = (props) => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact render={(props) => <DashBoard {...props} />} />
        <Route path="/stats" exact render={(props) => <Stats {...props} />} />
        <Route path="/stocks" exact render={(props) => <Stocks {...props} />} />
        <Route path="/order" exact render={(props) => <Order {...props} />} />
        <Route path="" render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RoutesEmployee);
