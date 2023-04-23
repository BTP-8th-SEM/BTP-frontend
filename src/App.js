import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Auth from './Components/Auth';
import TDashboard from './Components/TDashBoard';
import SDashboard from './Components/Student/SDashBoard';
import UserProfile from './Components/UserProfile';
import {
	Routes as Switch,
	Route,
} from "react-router-dom";
import CreateTest from './Components/ExamPage/CreateTest';
import ADashboard from './Components/Analysis/ADashboard';
import ClassAnalyticsDashboard from './Components/Analysis/ClassAnalyticsDashboard'

function App() {

	const [tname, setTName] = useState("");
	const [tid, setTid] = useState("");
	const [sname, setSName] = useState("");
	const [sid, setSid] = useState("");
	useEffect(
		() => {
			setTName("Ramesh Shetty");
			setTid("ramesh.shetty@intest.faculty.edu");
			setSName("Gaurav Sonawane");
			setSid("gaurav.sonawane@intest.edu");
		}
		, []);
	return (
		<div className="App">
			<NavBar />

			<Switch>
				<Route path="/" element={<Auth />} />
				<Route path="/teacherDash" element={<TDashboard tname={tname} tid={tid} />} />
				<Route path="/studentDash" element={<SDashboard sname={sname} sid={sid} />} />
				<Route path="/profile" element={<UserProfile />} />
				<Route path="/classAnalyticsDashboard" element={<ClassAnalyticsDashboard />} />
				<Route path="/create-test" element={<CreateTest />} />
			</Switch>

			

			<Footer />
		</div>
	);
}

export default App;
