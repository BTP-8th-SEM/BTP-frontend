import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./../../Styles/class_adashboard.css";
const ClassAnalyticsDashboard = () => {
    const TestDetails = {
        test_id: "123",
        test_name: "DSA T2",
        total_marks: "25"
    }
    const PassFail = {
        total: "25",
        pass: "20",
        fail: "5"
    }

    const ahl = [{
        testName: "DSA T2",
        average: "20",
        highest: "25",
        lowest: "10"
    }

    ]

    const [passFailData, setPassFailData] = useState({
        labels: ['Pass', "Fail"],
        datasets: [
            {
                data: [PassFail.pass, PassFail.fail]
            }
        ]
    });

    const studentList = [
        {
            id: 1,
            name: "Gaurav Sonawane",
            marks: "25",
            total: "25"
        },
        {
            id: 2,
            name: "Shreyas Kadu",
            marks: "24",
            total: "25"
        },
        {
            id: 3,
            name: "Prasad Dalwee",
            marks: "25",
            total: "25"
        },
        {
            id: 4,
            name: "Tarun Reddy",
            marks: "24",
            total: "25"
        }
    ];

    const [ahlData, setAhlData] = useState({
        labels: ahl.map((data) => ""),
        datasets: [
            {
                label: "Average Marks",
                data: ahl.map((data) => data.average)
            },
            {
                label: "Highest Marks",
                data: ahl.map((data) => data.highest)
            },
            {
                label: "Lowest Marks",
                data: ahl.map((data) => data.lowest)
            }
        ]
    });
    return (
        <div className="main">
            <div>
                <div className="center">
                    <div className="test-details">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="center">
                                    Test Details
                                </h5>

                            </div>
                            <div className="card-body pad mart">
                                <div className="pattern1">
                                    <p> Test Title : </p>
                                    <h6 className="card-title">{TestDetails['test_name']}</h6>
                                </div>

                                <div className="pattern1">
                                    <p> Test Id : </p>
                                    <h6 className="card-title">{TestDetails['test_id']}</h6>
                                </div>

                                <div className="pattern1">
                                    <p> Maximum Marks : </p>
                                    <h6 className="card-title">{TestDetails['total_marks']}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="class-analysis center">
                        <div className="pvf">
                            <Pie data={{
                                labels: passFailData.labels,
                                datasets: passFailData.datasets
                            }} />
                            <p className="center">Total Students (Pass and Fail)</p>
                        </div>
                        <div className="ahl">
                            <Bar data={ahlData} />
                            <p className="center">Average, Highest and Lowest Marks in Class</p>
                        </div>

                    </div>

                    <div className="student-list">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Marks/Total</th>
                                    <th scope="col">Individual</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentList.map(obj => (
                                    <tr>
                                        <th scope="row">{obj.id}</th>
                                        <td>{obj.name}</td>
                                        <td>{obj.marks}/{obj.total}</td>
                                        <td className="center"><button className="btn btn-primary">Analysis</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default ClassAnalyticsDashboard;