import './../Styles/pre-test-card.css';
import {Link} from 'react-router-dom';
const TPreTestCard = (props) => {
    return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.test["name"]}</h5>
                    <h6>Maximum Marks : {props.test["maxMarks"]}</h6>
                    <Link className="btn btn-light" to={`/classAnalyticsDashboard/${props.test['id']}`}>See Analytics</Link>
                    
                </div>
        </div>  
    );
}

export default TPreTestCard;