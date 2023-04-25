import './../Styles/pre-test-card.css'
const TPreTestCard = (props) => {
    return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.test["name"]}</h5>
                    <h6>Maximum Marks : {props.test["maxMarks"]}</h6>
                    <button className="btn btn-light">See Analytics</button>
                    
                </div>
        </div>  
    );
}

export default TPreTestCard;