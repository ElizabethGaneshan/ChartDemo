import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Interaction,
} from "chart.js";
import { getRelativePosition } from "chart.js/helpers";
import { Line } from "react-chartjs-2";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ReplayIcon from "@mui/icons-material/Replay";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "11:40",
  "11:50",
  "00:00",
  "00:10",
  "00:20",
  "00:30",
  "00:40",
  "00:50",
];
const LineChartData = {
  TransactionId: 749508,

  ChargingRate: "45.3014",

  // SoC: null,
  // Power: null,

  // SoC: [],
  // Power: [],

  SoC: [
    {
      ValueTimeStamp: "2023-07-27T09:46:50.000Z",
      MeterValue: "97",
      Unit: "Percent",
    },
    {
      ValueTimeStamp: "2023-07-27T09:46:46.000Z",
      MeterValue: "97",
      Unit: "Percent",
    },
    {
      ValueTimeStamp: "2023-07-27T09:45:46.000Z",
      MeterValue: "96",
      Unit: "Percent",
    },
    {
      ValueTimeStamp: "2023-07-27T09:44:46.000Z",
      MeterValue: "95",
      Unit: "Percent",
    },
    {
      ValueTimeStamp: "2023-07-27T09:43:46.000Z",
      MeterValue: "93",
      Unit: "Percent",
    },
    {
      ValueTimeStamp: "2023-07-27T09:42:46.000Z",
      MeterValue: "92",
      Unit: "Percent",
    },
    {
      ValueTimeStamp: "2023-07-27T09:41:46.000Z",
      MeterValue: "90",
      Unit: "Percent",
    },
    {
      ValueTimeStamp: "2023-07-27T09:40:47.000Z",
      MeterValue: "88",
      Unit: "Percent",
    },
  ],
  Power: [
    {
      ValueTimeStamp: "2023-07-27T09:46:50.000Z",
      MeterValue: "0.0",
      Unit: "W",
    },
    {
      ValueTimeStamp: "2023-07-27T09:46:46.000Z",
      MeterValue: "31593.0",
      Unit: "W",
    },
    {
      ValueTimeStamp: "2023-07-27T09:45:46.000Z",
      MeterValue: "37282.0",
      Unit: "W",
    },
    {
      ValueTimeStamp: "2023-07-27T09:44:46.000Z",
      MeterValue: "44406.0",
      Unit: "W",
    },
    {
      ValueTimeStamp: "2023-07-27T09:43:46.000Z",
      MeterValue: "50854.0",
      Unit: "W",
    },
    {
      ValueTimeStamp: "2023-07-27T09:42:46.000Z",
      MeterValue: "58069.0",
      Unit: "W",
    },
    {
      ValueTimeStamp: "2023-07-27T09:41:46.000Z",
      MeterValue: "63113.0",
      Unit: "W",
    },
    {
      ValueTimeStamp: "2023-07-27T09:40:47.000Z",
      MeterValue: "59418.0",
      Unit: "W",
    },
  ],
};

export const data = {
  labels,
  datasets: [
    {
      data: LineChartData.SoC.map((meterValue) => {
        return meterValue.MeterValue;
      }),
      // label: LineChartData?.SoC?.length !== 0 ? "SoC" : "none",
      label: "SoC",
      borderColor: "#6C60FF",
      borderWidth: 1,
      yAxisID: "y",
      pointStyle: "circle",
      pointRadius: 0,
      backgroundColor:"purple"
    },
    {
      // label: LineChartData?.Power?.length !== 0 ? "Power" : "none",
      label: "Power",
      data: LineChartData.Power.map((meterValue) => {
        return meterValue.MeterValue / 1000;
      }),
      borderColor: "#CE2A96",
      borderWidth: 1,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y",
    },
  ],
};

const isLoading = true;
const isApiFailed = true;

Interaction.modes.myCustomMode = function (
  chart,
  e,
  options,
  useFinalPosition
) {
  const position = getRelativePosition(e, chart);
console.log("positions",position)
  const items = [];
  // Interaction.evaluateInteractionItems(
  //   chart,
  //   "x",
  //   position,
  //   (element, datasetIndex, index) => {
  //     if (
  //       element.inXRange(position.x, useFinalPosition) &&
  //       myCustomLogic(element)
  //     ) {
  //       items.push({ element, datasetIndex, index });
  //     }
  //   }
  // );
  return items;
};

export default function App() {
  const options = {
    elements: {
      point: {
        radius: 0,
      },
      line: {
        capBezierPoints: false,
      },
    },
    // tooltips: {
    //   callbacks: {
    //     title: function(t, d) {
    //       return moment(d.labels[t[0].index]).format('dd MMM DD, YYYY');
    //     },
    //     label: function(t, d) {
    //       const label = d.datasets[t.datasetIndex].label;
    //       const value = d.datasets[t.datasetIndex].data[t.index];
    //       const sign = value >= 0 ? '+' : '';
    //       return `${label}: ${sign}${value.toFixed(2)}%`;
    //     }
    //   }
    // },

    responsive: true,
    interaction: {
      mode: "nearest",
      intersect: false,
    },
    stacked: false,
    plugins: {
      tooltip: {
        position: "average",
        usePointStyle: false,
        enabled: true,
        callbacks: {
          title: function (t, d) {
            return t[0]?.dataset?.label;
          },
          label: function (t, d) {
            // console.log(t, );
            return t.raw;
            // const label = d.datasets[t.datasetIndex].label;
            // const value = d.datasets[t.datasetIndex].data[t.index];
            // const sign = value >= 0 ? '+' : '';
            // return `${label}: ${sign}${value.toFixed(2)}%`;
          },
          labelPointStyle: function (context) {
            return {
              pointStyle: "circle",
              rotation: 0,
            };
          },
        },
        backgroundColor: "gray",
        borderColor: "gray",
        borderWidth: 1,
        titleFontColor: "black",
        titleFontStyle: "bold",
        displayColors: false,
        bodyFontColor: "black",
      },
      legend: {
        position: "right",
        align: "start",
        onClick: () => {},
        color: "#9BD0F5",
        labels: {
          boxWidth: 10,
          boxHeight: 1,
          paddingRight: 100,
          // padding:50,
          // filter: (item) => item.text !== "none",
        },
      },
      // title: {
      //   display: true,
      //   text: "Chart.js Line Chart - Multi Axis",
      // },
    },

    scales: {
      y: {
        border: {
          color: "#655B96",
        },
        type: "linear",
        display: true,
        position: "left",
        min: 0,
        max: 400,
        grid: {
          drawOnChartArea: false,
          color: "#655B96",
        },
        ticks: {
          count: 5,
          fontColor: "red",
        },
        offset: true,
      },
      x: {
        border: {
          color: "#655B96",
        },
        color: "red",
        offset: true,
        borderColor: "red",
        grid: {
          drawOnChartArea: false,
          color: "#655B96",
        },
        title: {
          text: "Time",
          display: true,
        },
      },
      // y1: {
      //   type: "linear",
      //   display: LineChartData.Power.length !== 0 ? true : false,
      //   position: "left",
      //   grid: {
      //     drawOnChartArea: false,
      //   },
      //   ticks: {
      //     count: 5,
      //   },
      //   offset: true,
      //   // min: 0,
      //   // max: 60000,
      // },
    },
  };

  return (
    <div
      className="mainDiv"
      style={{
        position: "relative",
        height: "500px",
        width: "500px",
        marginTop:"100px"
      }}>
      {/* {isLoading &&
        LineChartData?.Power?.length === 0 &&
        LineChartData?.SoC?.length === 0 && (
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              position: "absolute",
              width: "100%",
              height: "100%",
            }}>
            <CircularProgress
              sx={{ marginRight: "1rem", marginBottom: "4rem" }}
            />
          </Box>
        )} */}

      {/* {isApiFailed &&
        LineChartData?.Power?.length === 0 &&
        LineChartData?.SoC?.length === 0 && (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
              position: "absolute",
              backgroundColor: "white",
              opacity: 0.8,
            }}>
            <ReplayIcon></ReplayIcon>
          </Box>
        )} */}

      <Line options={options} data={data}  />
    </div>
  );
}
