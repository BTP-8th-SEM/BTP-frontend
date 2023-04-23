import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = (props) => {
    return <Bar data={props.chartData}/>;
}

export default BarChart;

// Bar_I_S_M - Bar Individual Subject Vs Marks