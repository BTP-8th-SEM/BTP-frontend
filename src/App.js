import './App.css';

import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import NavBar from './Components/NavBar';
import Auth from './Components/Auth';
import Home from './Components/Home';
import Footer from './Components/Footer'

function App() {

	const [isLogin, setIsLogin] = useState(false);

	const handleNavBarCallBack = (state) => {
		setIsLogin(state);
	}

	const handleLoginStateCallBack = (state) => {
		setIsLogin(state);
	}
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar cb_handle_navbar={handleNavBarCallBack} />
					{/* <Auth isLogin = {isLogin}
					cb_handle_login_state = {handleLoginStateCallBack}
					/> */}
				<Home />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
