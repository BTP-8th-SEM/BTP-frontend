import PreTestCard from './PreTestCard';
import './../Styles/pre-tests.css'

const PreTests = (props) => {
    // const previousTests = [
    //     {
    //         "id": "1",
    //         "title": "Test 1",
    //         "max-marks": "20",
    //         "duration": "1 hour",
    //         "marks" : "19"
    //     },
    //     {
    //         "id": "2",
    //         "title": "Test 2",
    //         "max-marks": "20",
    //         "duration": "1 hour",
    //         "marks" : "19"
    //     },
    //     {
    //         "id": "4",
    //         "title": "End Sem",
    //         "max-marks": "60",
    //         "duration": "3 hour",
    //         "marks" : "59"
    //     },{
    //         "id": "5",
    //         "title": "End Sem",
    //         "max-marks": "60",
    //         "duration": "3 hour",
    //         "marks" : "59"
    //     }
    // ]
    return (
        <div>
            <div className='cards-container'>
                {props.previousTests.map((test, index) => (
                   <PreTestCard test = {test} key={index}/>
                ))}
            </div>
        </div>
    );
}

export default PreTests;