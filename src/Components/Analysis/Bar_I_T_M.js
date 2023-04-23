import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarITM = (props) => {
    return <Bar data={props.chartData}/>;
}

export default BarITM;

// Bar_I_T_M - Bar Individual Topic Vs Marks