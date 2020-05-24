import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Paper, Grid, makeStyles } from "@material-ui/core";
import Billing from "../Components/Billing";
import Products from "../Components/Products";
import { getData } from "../Redux/reducer/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const DashBoard = (props) => {
  const classes = useStyles();
  const { getData, data } = props;

  useEffect(() => {
    getData();
  }, []);

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

const mapStateToProps = (state) => ({
  data: state.reducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (payload) => dispatch(getData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
