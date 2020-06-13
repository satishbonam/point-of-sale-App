import React from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import SelectQty from "../common/SelectQty";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
  cont: { maxHeight: "580px", overflow: "auto" },
});

const BillTable = (props) => {
  const classes = useStyles();
  const { billItems, totalBill } = props;
  return (
    <TableContainer component={Paper} className={classes.cont}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Price&nbsp;(per item)</TableCell>
            <TableCell align="right">Quantatity</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {billItems.map((row) => (
            <TableRow key={row.item}>
              <TableCell component="th" scope="row">
                {row.item}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">
                <SelectQty item={row} quantity={row.quantity} />
              </TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell component="th" scope="row">
              <h3>TOTAL</h3>
            </TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">
              <h3>{totalBill}</h3>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({
  billItems: state.employee.billItems,
  totalBill: state.employee.totalBill,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BillTable);
