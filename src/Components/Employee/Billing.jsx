import React, { useState } from "react";
import { connect } from "react-redux";
import { Paper, makeStyles, Button } from "@material-ui/core";
import Title from "../common/Title";
import BillTable from "./BillTable";
import Alert from "@material-ui/lab/Alert";
import { generateBill, changeBillStatus } from "../../Redux/Employee/actions";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({}));

const Billing = (props) => {
  const classes = useStyles();
  const {
    billItems,
    generateBill,
    totalBill,
    changeBillStatus,
    isBill,
  } = props;

  const handleBill = () => {
    changeBillStatus();
    generateBill({
      billItems: billItems,
      amount: totalBill,
      billNumber: uuidv4(),
    });
    setTimeout(() => {
      changeBillStatus();
      document.location.reload();
      alert("Bill Generated");
    }, 50);
  };
  return (
    <Paper>
      <Title title="Billing" />
      <BillTable />
      <Paper>
        {isBill && (
          <Alert severity="success" style={{ float: "left" }}>
            Bill Generated!
          </Alert>
        )}
        <Button
          color="primary"
          style={{ float: "right", margin: "10px" }}
          onClick={handleBill}
        >
          CheckOut
        </Button>
      </Paper>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  billItems: state.employee.billItems,
  totalBill: state.employee.totalBill,
  isBill: state.employee.isBill,
});

const mapDispatchToProps = (dispatch) => ({
  generateBill: (payload) => dispatch(generateBill(payload)),
  changeBillStatus: (payload) => dispatch(changeBillStatus(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Billing);
