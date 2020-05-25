import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
    margin: "auto",
  },
  paper: {
    maxWidth: 750,
    margin: "auto",
    marginTop: "50px",
    maxHeight: "580px",
    overflow: "auto",
  },
  header: {
    backgroundColor: "black",
    color: "white",
  },
});

const DisplayTable = (props) => {
  const classes = useStyles();
  const { rows = [] } = props;
  rows.sort((a, b) => {
    return Number(a.stocks) - Number(b.stocks);
  });

  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.header}>
            <TableCell className={classes.header}>Category</TableCell>
            <TableCell align="right" className={classes.header}>
              Item
            </TableCell>
            <TableCell align="right" className={classes.header}>
              Price
            </TableCell>
            <TableCell align="right" className={classes.header}>
              Stock
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.item}>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="right">{row.item}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.stocks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTable);
