import React, { useEffect } from "react";
import { connect } from "react-redux";
import DisplayTable from "../../Components/common/DisplayTable";
import { getOderData } from "../../Redux/Employee/actions";

const Order = (props) => {
  const { data } = props;
  const orderData = data.filter((item) => item[4] !== "delivered");
  console.log(orderData);
  return (
    <div>
      <DisplayTable rows={orderData} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.employee.data,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
