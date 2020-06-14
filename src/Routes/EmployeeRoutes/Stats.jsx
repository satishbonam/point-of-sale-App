import React from "react";
import { connect } from "react-redux";
import DisplayChart from "../../Components/Employee/DisplayChart";

const Stats = () => {
  return (
    <div style={{ margin: "100px 50px 50px 50px" }}>
      <DisplayChart />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
