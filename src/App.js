import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import TDashboard from './Components/TDashBoard';
import SDashboard from './Components/Student/SDashBoard';
import UserProfile from './Components/UserProfile';
import Test from './Components/ExamPage/Test';
import {
	Routes as Switch,
	Route,
} from "react-router-dom";
import UpdateTest from './Components/ExamPage/UpdateTest';
import ADashboard from './Components/Analysis/ADashboard';
import ClassAnalyticsDashboard from './Components/Analysis/ClassAnalyticsDashboard';
import CreateTest from './Components/ExamPage/CreateTest';
import Auth from './Context/User/Auth';

function App() {
	const [tname, setTName] = useState("");
	const [tid, setTid] = useState("");
	const [sname, setSName] = useState("");
	const role= 'teacher'
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
		<Auth>
			<div className="App">
				<NavBar />
				<div className='center'>
						<Switch>
							<Route path="/" element={<Login />} />
							<Route path="/teacherDash" element={<TDashboard tname={tname} tid={tid} />} />
							<Route path="/studentDash" element={<SDashboard sname={sname} sid={sid} />} />
							<Route path="/profile" element={<UserProfile />} />
							<Route path="/classAnalyticsDashboard/:testId" element={<ClassAnalyticsDashboard />} />
							<Route path="/studentAnalyticsDashboard" element={<ADashboard />} />
							<Route path="/create-test" element={<CreateTest />} />
							<Route path="/test/:testId" element={<Test />} />
						</Switch>
					</div>

				<Footer />
			</div>
		</Auth>
	);
}

export default App;
