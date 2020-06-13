import React, { useState, useEffect } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { connect } from "react-redux";
import { getBills } from "../../Redux/Employee/actions";

const DisplayChart = (props) => {
  const [hoverData, setHoverData] = useState(null);
  const { getBills, billData } = props;
  console.log(billData);
  useEffect(() => {
    getBills();
  }, []);
  const chartOptions = {
    xAxis: {
      categories: billData["x_axis"],
    },
    yAxis: {
      title: {
        text: "Amount",
      },
    },
    title: {
      text: "Today Bussiness",
    },
    series: [{ data: billData["y_axis"], name: "Today Sale" }],
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  billData: state.employee.billData,
});

const mapDispatchToProps = (dispatch) => ({
  getBills: (payload) => dispatch(getBills(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayChart);
