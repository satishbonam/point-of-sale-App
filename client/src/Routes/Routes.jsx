import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import { connect } from "react-redux";

const Routes = (props) => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact render={(props) => <Home {...props} />} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
