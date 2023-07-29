import React from "react";
import LineChart from "react-apexcharts";

const Chart = () => {
  const state = {
    series: [
        {
        name: "Revenue",
        data: [
          2000, 2050, 2100, 2150, 2200, 2220, 2180, 2230, 1900, 1920, 1950,
          2000
        ],
      },
      {
        name: "Profit",
        data: [
          1350, 1280, 1290, 1310, 1360, 1380, 1400, 1450, 1460, 1470, 1430, 1380
        ],
      },
    ],
    options: {
      colors: ["#448DF2", "#DBA362"],
      chart: {
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      grid: {
        row: {
          colors: ["transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
            "Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ],
      },
      yaxis: {
        labels: {
          show: true, 
        },
        tooltip: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 280,
            },
          },
        },
      ],
    },
  };

  return (
    <div style={{ width: "100%" }}>
      <p className="chartHeading">Profit & Revenue</p>
      <LineChart
        options={state.options}
        series={state.series}
        type="line"
        height="100%"
      />
    </div>
  );
};

export default Chart;
