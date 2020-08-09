import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Paper, Grid, makeStyles } from "@material-ui/core";
import Billing from "../../Components/Employee/Billing";
import Products from "../../Components/Employee/Products";
import { checkAuth } from "../../Redux/Auth/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const DashBoard = (props) => {
  const classes = useStyles();
  const { checkAuth, token, isLoading } = props;

  // useEffect(() => {
  //   checkAuth({ auth_token: token });
  // }, [token]);

  return (
    <div className={classes.root} style={{ marginTop: "80px" }}>
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
  token: state.auth.token,
  isLoading: state.auth.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth: (payload) => dispatch(checkAuth(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
