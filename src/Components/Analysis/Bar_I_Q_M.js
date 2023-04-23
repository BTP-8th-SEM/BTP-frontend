import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = (props) => {
    return <Bar data={props.chartData}/>;

    // return (
    //     <div>{props.chartData}</div>
    // );
}

export default BarChart;

// Bar_I_Q_M - Bar Individual Question Vs Marks