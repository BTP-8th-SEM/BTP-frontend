import "./../Styles/tdashboard.css";
import UpTests from "./UpTests";
import PreTests from "./PreTests";
import { Link } from "react-router-dom";
const TDashboard = (props) => {
    return (
        <div className="container main">
            <div className="teacher-nav">
                <div className="c1">
                    <h3>Welcome,</h3>
                    <div className="tid">ID/Email: {props.tid}</div>
                    <div className="tname">Name: {props.tname}</div>
                </div>
                <div className="c2">
                    <Link type="button" class="btn btn-dark" to="/create-test">Create Test</Link>
                </div>

            </div>
            <div className="upcoming-sec">
                <h3 className="center">Upcoming Tests</h3>
                <UpTests />
            </div>

            <div className="previous-sec">
                <h3 className="center">Previous Tests</h3>
                <PreTests />
            </div>
        </div>
    );
}

export default TDashboard;