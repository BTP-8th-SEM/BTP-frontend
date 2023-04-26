import { Link } from "react-router-dom";
import "./../Styles/navbar.css"
import { useContext } from "react";
import AuthContext from "../Context/User/AuthContext";
const NavBar = () => {
    const {auth,logout} = useContext(AuthContext);
    console.log(auth)
    return (

        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid justify">
                <a className="navbar-brand ml" href="/"><b>InTest</b></a>
                {auth.isAuthenticated && <span className="navbar-toggler-icon" style={{width:'max-content',color:'white',cursor:'pointer'}} onClick={logout}> Logout</span>}
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   
                </button> */}
            </div>
        </nav>
    );
}

export default NavBar;