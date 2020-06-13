import React, { useEffect } from "react";
import { connect } from "react-redux";
import DisplayTable from "../../Components/common/DisplayTable";
import { getOderData } from "../../Redux/Employee/actions";

const Order = (props) => {
  const { orderData, getOrderData } = props;
  useEffect(() => {
    getOrderData();
  }, []);
  return (
    <div>
      <DisplayTable rows={orderData} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  orderData: state.employee.orderData,
});

const mapDispatchToProps = (dispatch) => ({
  getOrderData: (payload) => dispatch(getOderData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
