import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Order from "../EmployeeRoutes/Order";
import NavBar from "../../Components/Vendor/NavBar";

const Routes = (props) => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/vendor" exact render={(props) => <Order {...props} />} />
        <Route path="" render={() => <Redirect to="/vendor" />} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
