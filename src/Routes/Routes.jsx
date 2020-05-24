import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import NavBar from "../Components/NavBar";
import Stats from "./Stats";
import Stocks from "./Stocks";
import Order from "./Order";
import DashBoard from "./DashBoard";

const Routes = (props) => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact render={(props) => <DashBoard {...props} />} />
        <Route path="/stats" exact render={(props) => <Stats {...props} />} />
        <Route path="/stocks" exact render={(props) => <Stocks {...props} />} />
        <Route path="/order" exact render={(props) => <Order {...props} />} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
