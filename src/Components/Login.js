import React, { useState } from 'react';
import './../Styles/login.css';
import { Link } from 'react-router-dom';
const Login = () => {
    const [emailVal, setEmailVal] = useState('');
    const [passVal, setPassVal] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const handleEmailInputChange = (e) => {
        setEmailVal(e.target.value);
    }
    const handlePassInputChange = (e) => {

        setPassVal(e.target.value);
    }
    const hitSubmit = (e) => {
        e.preventDefault();
        alert(`${emailVal}, ${passVal}`)
    }

    const handleOptionSelect = (event) => {
        setSelectedOption(event.target.textContent);
    };

    return (
        <div className="login-box">
            <h2> Login </h2>
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

                    <div>
                        <div className="dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {selectedOption || 'Select your role'}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li>
                                    <a className="dropdown-item" onClick={handleOptionSelect}>
                                        Teacher
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" onClick={handleOptionSelect}>
                                        Student
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Link type="submit" className="btn btn-success" id="s" to="/teacherDash">
                        Login
                    </Link>
                </div>
            </form>

        </div>
    );
}

export default Login;