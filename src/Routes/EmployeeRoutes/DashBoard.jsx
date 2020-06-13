import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Paper, Grid, makeStyles } from "@material-ui/core";
import Billing from "../../Components/Employee/Billing";
import Products from "../../Components/Employee/Products";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const DashBoard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item={true} xs={4}>
          <Billing />
        </Grid>
        <Grid item={true} xs={8}>
          <Products />
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
