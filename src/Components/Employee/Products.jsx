import React from "react";
import { connect } from "react-redux";
import { Paper, Grid, makeStyles } from "@material-ui/core";
import Title from "../common/Title";
import ItemCard from "../common/ItemCard";
import { v4 as uuidv4 } from "uuid";
import {
  addToBill,
  calTotalBill,
  getProducts,
} from "../../Redux/Employee/actions";
import Pagination from "../Employee/Pagination";

const useStyles = makeStyles((theme) => ({
  products: {
    maxHeight: "580px",
    overflow: "auto",
  },
}));

const Products = (props) => {
  const classes = useStyles();
  const { productsData, addToBill, calTotalBill, getProducts } = props;

  return (
    <Paper>
      <Title title="Products" />
      <Pagination apiCall={getProducts} />
      <Grid container className={classes.products}>
        {productsData.map((item) => {
          return (
            <ItemCard
              key={uuidv4()}
              name={item[1]}
              price={item[2]}
              onClick={() => {
                item[3] == 0 && alert("Out of Stock");
                item[3] > 0 &&
                  addToBill([...item, Number(item[5]) * Number(item[2])]);
                item[3]--;
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
  productsData: state.employee.productsData,
});

const mapDispatchToProps = (dispatch) => ({
  addToBill: (payload) => dispatch(addToBill(payload)),
  calTotalBill: (payload) => dispatch(calTotalBill(payload)),
  getProducts: (payload) => dispatch(getProducts(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
