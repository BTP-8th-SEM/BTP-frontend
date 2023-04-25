import "./../Styles/tdashboard.css";
import { useState, useEffect } from 'react';
import UpTests from "./UpTests";
import TPreTests from "./TPreTests";
import { Link } from "react-router-dom";
import axios from 'axios';

const TDashboard = (props) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [upcomingList, setUpcomingList] = useState([]);
    const [previousList, setPreviousList] = useState([]);

    const fetchUserData = (url) => {
        axios.create({
            baseURL: "http://localhost:8000/"
        })
        .get(url).then(
            (response) => {
                const name = response.data['firstName'] + " " +response.data['lastName'];
                
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
    const fetchUpcoming = (email) => {
        axios.create({
            baseURL: "http://localhost:8000/"
        })
            .get(`/upcoming-test-list-teacher?email=${email}`)
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
            .get(`/prev-test-list-teacher?email=${email}`)
            .then(function (response) {
                console.log(response.data);
                setPreviousList(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(()=> {
        setEmail('amitabh@gmail.com');
        const temp_email = 'amitabh@gmail.com';
        console.log("email:"+ email);
        const url = `/getUserByEmail/${temp_email}`;
        fetchUserData(url);
        fetchUpcoming(temp_email);
        fetchPrevious(temp_email);
        
    }, []);
    return (
        <div className="container main">
            <div className="teacher-nav">
                <div className="c1">
                    <h3>Welcome,</h3>
                    <div className="tid">Email: {email}</div>
                    <div className="tname">Name: {name}</div>
                </div>
                <div className="c2">
                    <Link type="button" className="btn btn-dark" to="/create-test">Create Test</Link>
                </div>

            </div>
            <div className="upcoming-sec">
                <h3 className="center">Upcoming Tests</h3>
                <UpTests upComingTests={upcomingList} />
            </div>

            <div className="previous-sec">
                <h3 className="center">Previous Tests</h3>
                <TPreTests previousTests={previousList}/>
            </div>
        </div>
    );
}

export default TDashboard;