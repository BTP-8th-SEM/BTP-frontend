import './../Styles/pre-test-card.css'
const TPreTestCard = (props) => {
    return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.test["title"]}</h5>
                    
                    <h6>Maximum Marks : {props.test["max-marks"]}</h6>
                    <h6>Duration : {props.test["duration"]}</h6>
                    <button className="btn btn-light">See Analytics</button>
                    
                </div>
        </div>  
    );
}

export default TPreTestCard;