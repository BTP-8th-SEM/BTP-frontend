import Login from "./Login";
import SignUp from "./SignUp";
import React, { useState } from "react";
import "./../Styles/auth.css"
import welcome from "./../Images/welcome.jpg";
const Auth = (props) => {

    return (
        <div className="auth">
            <div class="sign-up"> 
                 <img src={welcome}/>
            </div>

            <div class="login">
                {props.isLogin ? <Login /> :<SignUp /> }
            </div>

        </div>
    );
}
// cb = callback
export default Auth;