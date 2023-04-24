import React, { useState } from 'react';
import './../Styles/login.css';
import { Link } from 'react-router-dom';
const Login = () => {
    const [emailVal, setEmailVal] = useState('');
    const [passVal, setPassVal] = useState('');
    
    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            console.log(res);
            // const data = await res.json();
            // alert(data);
        }
        catch (error){
            console.log(error)
        }
    }
    
    const handleEmailInputChange = (e) => {
        setEmailVal(e.target.value);
    }
    const handlePassInputChange = (e) => {

        setPassVal(e.target.value);
    }
    const hitSubmit = (e) => {
        e.preventDefault();
        const LOGIN_API = `127.0.0.1:8000/login/?user_email=${emailVal}&password=${passVal}`
        fetchApiData(LOGIN_API);
    }


    return (
        <div className="login-box">
            <h2 className='center'> Login </h2>
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
    );
}

export default Login;