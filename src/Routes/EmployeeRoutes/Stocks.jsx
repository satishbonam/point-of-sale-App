import React, { useEffect } from "react";
import { connect } from "react-redux";
import DisplayTable from "../../Components/common/DisplayTable";
import { getData } from "../../Redux/reducer/actions";

const Stocks = (props) => {
  const { data, getData } = props;
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <DisplayTable rows={data} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.reducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (payload) => dispatch(getData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);
