import './../../Styles/up-test-card.css'
const SUpTestCard = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.test["name"]}</h5>

                <h6>Maximum Marks : {props.test["maxMarks"]}</h6>
                <h6>Duration : {props.test["duration"]}</h6>
                <h6>Start Date and Time : {props.test["startTime"]} IST</h6>
                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <button to="/take-test" target="_blank" rel="noopener noreferrer" className="btn btn-light">Start Test</button>

            </div>
        </div>

    );
}

export default SUpTestCard;