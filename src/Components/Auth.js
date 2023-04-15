import Login from "./Login";
import React, { useState } from "react";
import "./../Styles/auth.css"
import welcome from "./../Images/welcome.jpg";
const Auth = () => {

    return (
        <div className="auth">
            <div className="sign-up">
                <img src={welcome} />
            </div>

            <div className="login">
                <Login />
            </div>

        </div>
    );
}
// cb = callback
export default Auth;