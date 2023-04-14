import "./../../Styles/sdashboard.css";
import SUpTests from "./SUpTests";
import PreTests from "./../PreTests";
const SDashboard = (props) => {
    return (
        <div className="container main">
            <div className="student-nav">
                <div className="c1">
                    <h3>Welcome,</h3>
                    <div className="sid">ID/Email: {props.sid}</div>
                    <div className="sname">Name: {props.sname}</div>
                </div>
                {/* <div className="c2">
                    <button type="button" class="btn btn-dark">Create Test</button>
                </div> */}
                
            </div>
            <div className="upcoming-sec">
                <h3 className="center">Upcoming Tests</h3>
                <SUpTests />
            </div>
            
            <div className="previous-sec">
                <h3 className="center">Previous Tests</h3>
                <PreTests />
            </div>
        </div>
    );
}

export default SDashboard;