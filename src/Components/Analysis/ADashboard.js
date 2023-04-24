import { useState } from "react"
import { QuestionVSMarks, TopicVsMarks, SubjectVsMarks } from "./Data";
import BarChart from "./../Analysis/Bar_I_Q_M";
import BarITM from "./../Analysis/Bar_I_T_M";
import "./../../Styles/adashboard.css";
const ADashboard = () => {
    const [testName, setTestName] = useState("DSA T2");
    const [testResult, setTestResult] = useState("Pass");
    const [yourMarks, setYourMarks] = useState("24");
    const [maxMarks, setMaxMarks] = useState("25");
    const [questionsData, setQuestionsData] = useState({
        labels: QuestionVSMarks.map((data) => data.questionId),
        datasets: [
            {
                label: "Your Marks",
                data: QuestionVSMarks.map((data) => data.yourMarks)
            },
            {
                label: "Average Marks",
                data: QuestionVSMarks.map((data) => data.averageMarks)
            },
            {
                label: "Highest Marks",
                data: QuestionVSMarks.map((data) => data.highestMarks)
            },
            {
                label: "Lowest Mark",
                data: QuestionVSMarks.map((data) => data.lowestMarks)
            }
        ]
    });

    const [topicsData, setTopicsData] = useState({
        labels: TopicVsMarks.map((data) => data.topicName),
        datasets: [
            {
                label: "Your Marks",
                data: TopicVsMarks.map((data) => data.yourMarks)
            },
            {
                label: "Average Marks",
                data: TopicVsMarks.map((data) => data.averageMarks)
            },
            {
                label: "Highest Marks",
                data: TopicVsMarks.map((data) => data.highestMarks)
            },
            {
                label: "Lowest Mark",
                data: TopicVsMarks.map((data) => data.lowestMarks)
            }
        ]
    });

    const [subjectsData, setSubjectsData] = useState({
        labels: SubjectVsMarks.map((data) => data.subjectName),
        datasets: [
            {
                label: "Your Marks",
                data: SubjectVsMarks.map((data) => data.yourMarks)
            },
            {
                label: "Average Marks",
                data: SubjectVsMarks.map((data) => data.averageMarks)
            },
            {
                label: "Highest Marks",
                data: SubjectVsMarks.map((data) => data.highestMarks)
            },
            {
                label: "Lowest Mark",
                data: SubjectVsMarks.map((data) => data.lowestMarks)
            }
        ]
    });

    return (
        <div>
            <div className="center">
                <div className="card mb-3" style={{ width: 540 }}>
                    <div className="row g-0">
                        <div className="col-md-4 center-all result-bg">
                            <div className="img-fluid" >
                                <h4>
                                    Result
                                </h4>

                            </div>

                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{testName}</h5>
                                <p className="card-text res-m">Status: <b>{testResult}</b></p>
                                <p className="card-text res-m">Marks: <b>{yourMarks}</b></p>
                                <p className="card-text res-m">Maximum Marks: <b>{maxMarks}</b></p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>


            <div className="graph-arr">
                <div className="container main" style={{ width: 500 }}>
                    <div className="chart">
                        <BarChart chartData={questionsData} />
                        <p style={{ display: "flex", justifyContent: "center" }}>Questions VS Marks</p>
                    </div>
                </div>

                <div className="container main" style={{ width: 500 }}>
                    <div className="chart">
                        <BarITM chartData={topicsData} />
                        <p style={{ display: "flex", justifyContent: "center" }}>Topic Vs Marks</p>
                    </div>


                </div>
                <div className="container main" style={{ width: 500}}>
                    <div className="chart">
                        <BarITM chartData={subjectsData} />
                        <p style={{ display: "flex", justifyContent: "center" }}>Subject Vs Marks</p>
                    </div>
                </div>
            </div>

            

        </div>


    );

}

export default ADashboard;