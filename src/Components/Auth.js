import Login from "./Login";
import SignUp from "./SignUp";

import  "./../Styles/auth.css"
const Auth = () => {
    return (
        <div className="auth">
            <div class="sign-up">
                <SignUp/>
            </div>
            
            <div class="login">
                <Login/>
            </div>
            
        </div>
    );
}

export default Auth;