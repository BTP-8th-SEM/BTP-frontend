import { Link } from 'react-router-dom';
import './../Styles/pre-test-card.css'
const PreTestCard = (props) => {
    return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.test["name"]}</h5>
                    
                    <h6>Maximum Marks : {props.test["maxMarks"]}</h6>
                    <h6>Your Marks : {props.test["obtainedMarks"]}</h6>
                    {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    <Link className="btn btn-light" to={`/studentAnalyticsDashboard/${props.test["id"]}/${props.test["studentId"]}`}>See Analytics</Link>
                    
                </div>
        </div>  
    );
}

export default PreTestCard;