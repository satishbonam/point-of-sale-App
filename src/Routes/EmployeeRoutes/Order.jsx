import React, { useEffect } from "react";
import { connect } from "react-redux";
import DisplayTable from "../../Components/common/DisplayTable";
import { getOrderData } from "../../Redux/Employee/actions";
import Pagination from "../../Components/Vendor/Pagination";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { checkAuth } from "../../Redux/Auth/actions";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  paper: {
    maxWidth: 1000,
    margin: "auto",
    marginTop: "50px",
    overflow: "auto",
  },
});

const Order = (props) => {
  const classes = useStyles();

  const { orderData, getOrderData, checkAuth, token, isLoading } = props;

  // useEffect(() => {
  //   checkAuth({ auth_token: token });
  // }, [token]);

  return (
    <div style={{ margin: "100px 50px 50px 50px" }}>
      <TableContainer component={Paper} className={classes.paper}>
        {isLoading ? <CircularProgress /> : <DisplayTable rows={orderData} />}

        <Pagination apiCall={getOrderData} />
      </TableContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  orderData: state.employee.orderData,
  token: state.auth.token,
  isLoading: state.employee.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getOrderData: (payload) => dispatch(getOrderData(payload)),
  checkAuth: (payload) => dispatch(checkAuth(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
