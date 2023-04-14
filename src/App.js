import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Auth from './Components/Auth';
import TDashboard from './Components/TDashBoard';
import SDashboard from './Components/Student/SDashBoard';

function App() {

	const [tname, setTName] = useState("");
	const[tid, setTid] = useState("");
	const[sname, setSName] = useState("");
	const[sid, setSid] = useState("");
	useEffect(
		()=>{
			setTName("Ramesh Shetty");
			setTid("ramesh.shetty@intest.faculty.edu");
			setSName("Gaurav Sonawane");
			setSid("gaurav.sonawane@intest.edu");
		}
	,[]);
	return (
		<div className="App">
			<NavBar />
			<Auth />

			{/* <TDashboard tname={tname} tid={tid}/> */}

			{/* <SDashboard sname={sname} sid={sid} /> */}

			{/* <Home /> */}
			<Footer />
		</div>
	);
}

export default App;
