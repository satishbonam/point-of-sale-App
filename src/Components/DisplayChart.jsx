import React, { useState, useEffect } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { connect } from "react-redux";
import { getBills } from "../Redux/reducer/actions";

const DisplayChart = (props) => {
  const [hoverData, setHoverData] = useState(null);
  const { getBills, billData } = props;
  console.log(billData);
  useEffect(() => {
    getBills();
  }, []);
  const chartOptions = {
    xAxis: {
      categories: billData && billData.y,
    },
    yAxis: {
      title: {
        text: "Amount",
      },
    },
    title: {
      text: "Today Bussiness",
    },
    series: [{ data: billData && billData.x, name: "Today Sale" }],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver(e) {
              setHoverData(e.target.category);
            },
          },
        },
      },
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      {/* <button onClick={updateSeries}>Update Series</button> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  billData: state.reducer.billData,
});

const mapDispatchToProps = (dispatch) => ({
  getBills: (payload) => dispatch(getBills(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayChart);
