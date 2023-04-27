import { useState, useContext, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./../../Styles/class_adashboard.css";
import AuthContext from "../../Context/User/AuthContext";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";
const ClassAnalyticsDashboard = (props) => {
    const {testId} = useParams();
    console.log(testId)
    const {auth} = useContext(AuthContext);
    const {email} = auth;
    console.log(email)
    const [TestDetails, setTestDetails] = useState({
        test_id: "123",
        test_name: "DSA T2",
        total_marks: "25"
    });
    // const [testAnalysis, setTestAnalysis] = useState({

    // });
 
    const [studentList, setStudentList] = useState([]);
    const [PassFailV, setPassFailV] = useState({});
    const [ahlV, setAhlV] = useState([]);
    
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
                data: [PassFailV.pass, PassFailV.fail]
            }
        ]
    });
    

    const [ahlData, setAhlData] = useState({
        labels: ahlV.map((data) => ""),
        datasets: [
            {
                label: "Average Marks",
                data: ahlV.map((data) => data.average)
            },
            {
                label: "Highest Marks",
                data: ahlV.map((data) => data.highest)
            },
            {
                label: "Lowest Marks",
                data: ahlV.map((data) => data.lowest)
            }
        ]
    });
    const fetchTestDetails = (id) => {
        axios.create({
            baseURL: "http://localhost:8000/"
        })
            .get(`/getTestById/${id}`)
            .then(function (response) {
                console.log(response.data);
                setTestDetails(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const fetchStudentsList = (id) => {
        axios.create({
            baseURL: "http://localhost:8000/"
        })
            .get(`/getStudents?testId=${id}`)
            .then(function (response) {
                console.log(response.data);
                setStudentList(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const fetchClassAnalysis = (id) => {
        axios.create({
            baseURL: "http://localhost:8000/"
        })
            .get(`/getAnalysisTestById/${id}`)
            .then(function (response) {
                const classAnalysis = response.data;
                console.log(classAnalysis);
                setPassFailV({
                    total: classAnalysis.totalAppeared,
                    pass: classAnalysis.noOfPassed,
                    fail: classAnalysis.noOfFailed
                });
                setAhlV([{
                    average: classAnalysis.avgMarks,
                    highest: classAnalysis.highestMarks,
                    lowest: classAnalysis.lowestMarks
                }])
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(()=>{
        console.log('pass',PassFailV);
        setAhlData({
            labels: ahlV.map((data) => ""),
            datasets: [
                {
                    label: "Average Marks",
                    data: ahlV.map((data) => data.average)
                },
                {
                    label: "Highest Marks",
                    data: ahlV.map((data) => data.highest)
                },
                {
                    label: "Lowest Marks",
                    data: ahlV.map((data) => data.lowest)
                }
            ]
        })
    },[PassFailV]);

    useEffect(()=>{
        console.log('pass',PassFailV);
        setPassFailData({
                labels: ['Pass', "Fail"],
                datasets: [
                    {
                        data: [PassFailV.pass, PassFailV.fail]
                    }
                ]
        })
    },[PassFailV]);

    

 
    useEffect(() => {
        fetchTestDetails(testId);
        fetchStudentsList(testId);
        fetchClassAnalysis(testId);
    }, []);
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
                                    <h6 className="card-title">{TestDetails['name']}</h6>
                                </div>

                                <div className="pattern1">
                                    <p> Test Id : </p>
                                    <h6 className="card-title">{TestDetails['id']}</h6>
                                </div>

                                <div className="pattern1">
                                    <p> Maximum Marks : </p>
                                    <h6 className="card-title">{TestDetails['maxMarks']}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="class-analysis center">
                        <div className="pvf">
                            {PassFailV.pass}
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
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Marks/Total</th>
                                    <th scope="col">Individual</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentList.map((obj,idx) => (
                                    <tr key={idx }>
                                        <th scope="row">{obj.userId}</th>
                                        <td>{obj.firstName} {obj.lastName}</td>
                                        <td>{obj.obtainedMarks}/{TestDetails['maxMarks']}</td>
                                        <td className="center"><Link className="btn btn-primary" to={`/studentAnalyticsDashboard/${TestDetails['id']}/${obj.userId}`}>Analysis</Link></td>
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