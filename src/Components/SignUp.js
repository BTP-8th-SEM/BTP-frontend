import  "./../Styles/sign-up.css"
const SignUp = () => {
    return (
        <div className="signup-box">
            <h2>Sign Up</h2>
            <div className="sign-up-form">
                <div className="mb-3">
                    <label className="form-label" id="name-l">Name</label>
                    <input type="text" className="form-control" id="name-i" placeholder="Your Full Name"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" id="email-l">Email</label>
                    <input type="text" className="form-control" id="email-i" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" id="pass-l">Password</label>
                    <input type="password" className="form-control" id="pass-i" placeholder="Password"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" id="pass-again-l">Password Again</label>
                    <input type="password" className="form-control" id="pass-again-i" placeholder="Type your password again"/>
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
                <button type="button" className="btn btn-success" id="submit">Submit</button>

                
            </div>
            
        </div>
    );
}

export default SignUp;