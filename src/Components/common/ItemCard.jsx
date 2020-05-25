import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Paper, Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    width: "200px",
    margin: "20px",
    padding: theme.spacing(2),
  },
  detailsTitle: {
    textAlign: "center",
    margin: "5px",
    backgroundColor: "#b3e5fc",
  },
  detailsPrice: {
    textAlign: "center",
    margin: "5px",
    backgroundColor: "#e1bee7",
  },
  detailsQty: {
    textAlign: "center",
    margin: "5px",
    backgroundColor: "#fff9c4",
  },
  fab: {
    float: "right",
  },
}));

const ItemCard = (props) => {
  const classes = useStyles();
  const { name, price, onClick, qty, isBill } = props;
  const [isAdded, setStatus] = useState(false);
  return (
    <Paper className={classes.root}>
      <Paper className={classes.detailsTitle}>{name}</Paper>
      <Paper className={classes.detailsPrice}>{`Rs: ${price}`}</Paper>
      <Paper className={classes.detailsQty}>{`Qty: ${qty}`}</Paper>
      <Fab
        aria-label="add"
        size={"small"}
        className={classes.fab}
        onClick={!isAdded ? onClick : () => setStatus(!isBill)}
        onClickCapture={() => setStatus(!isBill)}
      >
        <AddIcon />
      </Fab>
      {isAdded && (
        <Alert severity="success" style={{ clear: "both" }}>
          Item Added to Bill!
        </Alert>
      )}
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  isBill: state.reducer.isBill,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);
