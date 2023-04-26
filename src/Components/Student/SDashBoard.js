import "./../../Styles/sdashboard.css";
import SUpTests from "./SUpTests";
import PreTests from "./../PreTests";
import { useState, useContext, useEffect } from "react";
import axios from 'axios';
import AuthContext from "../../Context/User/AuthContext";
const SDashboard = (props) => {
    const {auth} = useContext(AuthContext);
    const {email} = auth
    const [name, setName] = useState("");
    const [testCode, setTestCode] = useState('');

    const [upcomingList, setUpcomingList] = useState([]);
    const [previousList, setPreviousList] = useState([]);

    const fetchUserData = (url) => {
        axios.create({
            baseURL: "http://localhost:8000/"
        })
            .get(url).then(
                (response) => {
                    const name = response.data['firstName'] + " " + response.data['lastName'];

                    setName(name);
                }
            ).catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    const registerToTest = (testCode, email) => {
        axios.create({
            baseURL: "http://localhost:8000/"
        })
            .post('/create_map', {
                testId: testCode,
                userEmail: email
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const fetchUpcoming = (email) => {
        axios.create({
            baseURL: "http://localhost:8000/"
        })
            .get(`/upcoming-test-list?email=${email}`)
            .then(function (response) {
                console.log(response.data);
                setUpcomingList(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const fetchPrevious = (email) => {
        axios.create({
            baseURL: "http://localhost:8000/"
        })
            .get(`/prev-test-list?email=${email}`)
            .then(function (response) {
                console.log(response.data);
                setPreviousList(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleTestCodeInput = (e) => {
        setTestCode(e.target.value);
    }

    const handleTestRegistration = (e) => {
        e.preventDefault();
        registerToTest(testCode, email);
    }

    useEffect(() => {
        // setEmail(AuthContextVar.email);
        // setEmail(auth.email);
        const url = `/getUserByEmail/${email}`;
        fetchUserData(url);
        fetchUpcoming(email);
        fetchPrevious(email);

    }, [email]);

    return (
        <div className="main center">
            <div>
                <div className="student-nav center">
                    <div className="c1">
                        <h3>Welcome,</h3>
                        <div className="sid">Email: {email}</div>
                        <div className="sname">Name: {name}</div>
                    </div>
                    {/* <div className="c2">
                    <button type="button" className="btn btn-dark">Create Test</button>
                </div> */}

                </div>
                <div className="upcoming-sec">
                    <h3 className="center">Upcoming Tests</h3>
                    <div className="register">
                        <div className="wrap">
                            <input className="form-control"
                                placeholder="Enter Test Code"
                                onChange={handleTestCodeInput} />
                        </div>
                        <div className="wrap">
                            <button className="btn btn-primary center" onClick={handleTestRegistration}>Register</button>
                        </div>


                    </div>

                    <SUpTests supComingTests={upcomingList}/>
                </div>

                <div className="previous-sec">
                    <h3 className="center">Previous Tests</h3>
                    <PreTests previousTests={previousList}/>
                </div>
            </div>
        </div>

    );
}

export default SDashboard;