import React, { useState } from "react";
import "./../Styles/sign-up.css";

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passAgain, setPassAgain] = useState('');
    const [role, setRole] = useState('');

    const handleNameInput = (e) => {
        setName(e.target.value);
    }

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }

    const handlePassInput = (e) => {
        setPass(e.target.value);
    }

    const handlePassAgainInput = (e) => {
        setPassAgain(e.target.value);
    }

    const hitSubmit = (e) => {
        e.preventDefault();
        alert(`${name}, ${email}, ${pass}, ${passAgain}, ${role}`);
    }
    return (
        <div className="signup-box">
            <h2>Sign Up</h2>
            <form onSubmit={hitSubmit}>
                <div className="sign-up-form">
                    <div className="mb-3">
                        <label className="form-label" id="name-l">Name</label>
                        <input type="text"
                            className="form-control"
                            id="name-i"
                            placeholder="Your Full Name"
                            onChange={handleNameInput}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" id="email-l">Email</label>
                        <input type="text"
                            className="form-control"
                            id="email-i"
                            placeholder="name@example.com"
                            onChange={handleEmailInput}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" id="pass-l">Password</label>
                        <input type="password"
                            className="form-control"
                            id="pass-i"
                            placeholder="Password"
                            onChange={handlePassInput}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" id="pass-again-l">Password Again</label>
                        <input type="password"
                            className="form-control"
                            id="pass-again-i"
                            placeholder="Type your password again"
                            onChange={handlePassAgainInput}
                        />
                    </div>

                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="role-d" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select Role
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Teacher</a>
                            <a className="dropdown-item" href="#">Student</a>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success" id="submit">Submit</button>


                </div>
            </form>

        </div>
    );
}

export default SignUp;