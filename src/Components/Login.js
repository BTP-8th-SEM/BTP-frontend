import './../Styles/login.css';
const Login = () => {
    return (
        <div className="login-box">
            <h2> Login </h2>
            <div class="login-form">
                <div className="mb-3">
                    <label className="form-label" id="email-l">Email</label>
                    <input type="text" className="form-control" id="email-i" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" id="pass-l">Password</label>
                    <input type="password" className="form-control" id="pass-i" placeholder="Password"/>
                </div>
                
                <button type="button" className="btn btn-success" id="s">Submit</button>


                
            </div>
        </div>
    );
}

export default Login;