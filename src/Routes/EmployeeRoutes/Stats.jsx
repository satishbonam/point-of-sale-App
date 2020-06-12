import React from "react";
import { connect } from "react-redux";
import DisplayChart from "../../Components/DisplayChart";

const Stats = () => {
  return (
    <div>
      <DisplayChart />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
