import UpTestCard from './UpTestCard';
import './../Styles/up-tests.css'

const UpTests = (props) => {
    // const upComingTests = [
    //     {
    //         "id": "1",
    //         "title": "Test 1",
    //         "max-marks": "20",
    //         "duration": "1 hour",
    //         "start-datetime": "14-02-2022, 11:00 AM IST"
    //     },
    //     {
    //         "id": "2",
    //         "title": "Test 2",
    //         "max-marks": "20",
    //         "duration": "1 hour",
    //         "start-datetime": "14-03-2022, 11:00 AM IST"
    //     },
    //     {
    //         "id": "1",
    //         "title": "End Sem",
    //         "max-marks": "60",
    //         "duration": "3 hour",
    //         "start-datetime": "15-04-2022, 11:00 AM IST"
    //     }
    // ]
    return (
        <div>
            <div className='cards-container'>
                {props.upComingTests.map((test, index) => (
                   <UpTestCard test = {test}/>
                ))}
            </div>
        </div>
    );
}

export default UpTests;