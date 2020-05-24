import React from "react";
import { connect } from "react-redux";
import { Paper, Grid, makeStyles } from "@material-ui/core";
import Title from "./common/Title";
import ItemCard from "./common/ItemCard";
import { v4 as uuidv4 } from "uuid";
import { addToBill, calTotalBill } from "../Redux/reducer/actions";

const useStyles = makeStyles((theme) => ({
  products: {
    maxHeight: "580px",
    overflow: "auto",
  },
}));

const Products = (props) => {
  const classes = useStyles();
  const { data, addToBill, calTotalBill } = props;
  return (
    <Paper>
      <Title title="Products" />
      <Grid container className={classes.products}>
        {data.map((item) => {
          return (
            <ItemCard
              key={uuidv4()}
              name={item.item}
              price={item.price}
              qty={item.quantity}
              onClick={() => {
                addToBill({
                  ...item,
                  total: Number(item.quantity) * Number(item.price),
                });
                setTimeout(() => {
                  calTotalBill();
                }, 10);
              }}
            />
          );
        })}
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  data: state.reducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  addToBill: (payload) => dispatch(addToBill(payload)),
  calTotalBill: (payload) => dispatch(calTotalBill(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
