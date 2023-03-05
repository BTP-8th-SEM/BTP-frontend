import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import Auth from './Components/Auth';
import Footer from './Components/Footer'

function App() {

	const [isLogin, setIsLogin] = useState(false);
	
	const handleNavBarCallBack = (state) => {
		setIsLogin(state);
	}

	return (
		<div className="App">
			<NavBar cb_handle_navbar = {handleNavBarCallBack} />
			<Auth isLogin = {isLogin} />
			<Footer />
		</div>
	);
}

export default App;
