import './../Styles/up-test-card.css'
const UpTestCard = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.test["name"]}</h5>

                <h6>Maximum Marks : {props.test["maxMarks"]}</h6>
                <h6>Start Date and Time : {props.test["startTime"]}</h6>
                <h6>End Date and Time : {props.test["endTime"]}</h6>
                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                <button to="/take-test" target="_blank" rel="noopener noreferrer" className="btn btn-light">Edit Test</button>

            </div>
        </div>

    );
}

export default UpTestCard;