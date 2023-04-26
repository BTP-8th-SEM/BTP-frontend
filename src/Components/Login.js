import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import './../Styles/login.css';
import { Link, redirect } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../Context/User/AuthContext';

const Login = () => {
    const {auth, updateAuth}= useContext(AuthContext);
    const navigate = useNavigate();
    const [emailVal, setEmailVal] = useState(auth.email);
    const [passVal, setPassVal] = useState('');
    const {role,isAuthenticated} = auth;


    const fetchApiData = async (url) => {
        axios.create({
            baseURL: "http://localhost:8000/"
        })
        .get(url).then(
            (response) => {
                updateAuth({'email':emailVal,isAuthenticated:response.data['isAuthenticated'],role:response.data['role']})
            }
        ).catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
    }
    
    const handleEmailInputChange = (e) => {
        setEmailVal(e.target.value);
    }
    const handlePassInputChange = (e) => {

        setPassVal(e.target.value);
    }
    const hitSubmit = (e) => {
        e.preventDefault();
        console.log('emailVal, passVal' + emailVal + " " + passVal);
        if(emailVal === "" || passVal === "") {
            alert('Empty Fields, try again!')
        }
        else {
            const LOGIN_API = `/login?user_email=${emailVal}&password=${passVal}`
            console.log(LOGIN_API)
            fetchApiData(LOGIN_API);
            // if(isAuthenticated === false) {
            //     alert('Invalid Credentials!!!');
            // }
        }
        
    }
    useEffect(
        ()=>{if(isAuthenticated){
            // {email, updateAuth}updateAuth(emailVal);
            navigate(role === 'teacher' ? '/teacherDash' : '/studentDash', { replace: true });
            
            console.log("in use effect : " + auth.email);
        }}
        ,[isAuthenticated, role])


    return (
        <div className="auth">
        <div className="login">
        
            <div className="login-box">
            <h2 className='center'> Login </h2>
            {auth.email}
            <form onSubmit={hitSubmit}>
                <div className="login-form">
                    <div className="mb-3">
                        <label className="form-label" id="email-l">Email</label>
                        <input type="text"
                            className="form-control"
                            id="email-i"
                            placeholder="name@example.com"
                            onChange={handleEmailInputChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" id="pass-l">Password</label>
                        <input type="password"
                            className="form-control"
                            id="pass-i"
                            placeholder="Password"
                            onChange={handlePassInputChange} />
                    </div>

                    <Link type="submit" className="btn btn-success" onClick={hitSubmit} id="s" to="/teacherDash">
                        Submit
                    </Link>

                    <div className='notice'>
                        <h4 className='center'> Important </h4>
                        <div className="notice-body">
                            <ol>
                                <li>Please contact Organization Admin to <b>Create Account.</b></li>
                                <li> Once you login, you'll be redirected to dashboard according to your role.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </form>

        </div>
        </div>

    </div>
    );
}

export default Login;