import React, { useEffect } from "react";
import { connect } from "react-redux";
import DisplayTable from "../../Components/common/DisplayTable";
import { getData } from "../../Redux/Employee/actions";
import Pagination from "../../Components/Admin/Pagination";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    maxWidth: 1000,
    margin: "auto",
    marginTop: "50px",
    overflow: "auto",
  },
});

const Stocks = (props) => {
  const classes = useStyles();

  const { data, getData } = props;

  return (
    <div style={{ margin: "100px 50px 50px 50px" }}>
      <TableContainer component={Paper} className={classes.paper}>
        <DisplayTable rows={data} />
        <Pagination apiCall={getData} />
      </TableContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.employee.data,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (payload) => dispatch(getData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);
