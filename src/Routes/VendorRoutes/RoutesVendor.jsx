import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Stocks from "../EmployeeRoutes/Stocks";
import Order from "../EmployeeRoutes/Order";

const Routes = (props) => {
  return (
    <div>
      <Switch>
        <Route
          path="/vendor/stocks"
          exact
          render={(props) => <Stocks {...props} />}
        />
        <Route
          path="/vendor/order"
          exact
          render={(props) => <Order {...props} />}
        />
        <Route path="" render={() => <Redirect to="/vendor" />} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
