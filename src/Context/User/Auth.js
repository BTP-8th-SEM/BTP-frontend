import { useState } from 'react'
import AuthContext from './AuthContext'
import { useNavigate } from 'react-router';
const Auth = (props) => {
    const UnAuthenicated = {
        'email':'',
        isAuthenticated:false,
        role:''
    };
    const navigate = useNavigate()
    const [auth, setAuth] = useState(JSON.parse(window.localStorage.getItem('auth'))||UnAuthenicated);
    const logout = ()=>{
        setAuth(UnAuthenicated)
        navigate('/')
    }

    const updateAuth = (updates) => {
        console.log(updates)
        setAuth(prevstate => {
            const current = {...prevstate, ...updates}; 
            window.localStorage.setItem('auth',JSON.stringify(current))
            return current;
        })
    }
    return (
        <AuthContext.Provider value={{auth, updateAuth,logout}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default Auth;