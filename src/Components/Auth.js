import Login from "./Login";
import SignUp from "./SignUp";
import React, { useState } from "react";
import "./../Styles/auth.css"
import welcome from "./../Images/welcome.jpg";
const Auth = (props) => {

    const handleLoginStateCallBack = (state) => {
        props.cb_handle_login_state(state);
    }

    return (
        <div className="auth">
            <div class="sign-up"> 
                 <img src={welcome}/>
            </div>

            <div class="login">
                {
                    props.isLogin ? <Login cb_handle_login_state = {handleLoginStateCallBack} /> : 
                            <SignUp cb_handle_login_state = {handleLoginStateCallBack}/> 
                }
            </div>

        </div>
    );
}
// cb = callback
export default Auth;