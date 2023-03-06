import './../Styles/up-test-card.css'
const UpTestCard = (props) => {
    return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.test["title"]}</h5>
                    
                    <h6>Maximum Marks : {props.test["max-marks"]}</h6>
                    <h6>Duration : {props.test["duration"]}</h6>
                    <h6>Start Date and Time : {props.test["start-datetime"]}</h6>
                    {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    <button className="btn btn-primary">Take Test</button>
                    
                </div>
        </div>  
    );
}

export default UpTestCard;