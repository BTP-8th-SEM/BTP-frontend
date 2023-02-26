import React, { useState } from 'react';
import './../Styles/login.css';
const Login = () => {
    const [emailVal, setEmailVal] = useState('');
    const [passVal, setPassVal] = useState('');
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

    return (
        <div className="login-box">
            <h2> Login </h2>
            <form onSubmit={hitSubmit}>
                <div class="login-form">
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

                    <button type="submit"
                        className="btn btn-success"
                        id="s">Submit</button>

                </div>
            </form>

        </div>
    );
}

export default Login;