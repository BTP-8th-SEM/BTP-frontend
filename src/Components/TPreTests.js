import TPreTestCard from './TPreTestCard';
import './../Styles/pre-tests.css'

const TPreTests = () => {
    const previousTests = [
        {
            "id": "1",
            "title": "Test 1",
            "max-marks": "20",
            "duration": "1 hour",
            "marks" : "19"
        },
        {
            "id": "2",
            "title": "Test 2",
            "max-marks": "20",
            "duration": "1 hour",
            "marks" : "19"
        },
        {
            "id": "4",
            "title": "End Sem",
            "max-marks": "60",
            "duration": "3 hour",
            "marks" : "59"
        },{
            "id": "5",
            "title": "End Sem",
            "max-marks": "60",
            "duration": "3 hour",
            "marks" : "59"
        }
    ]
    return (
        <div>
            <div className='cards-container'>
                {previousTests.map((test, index) => (
                   <TPreTestCard test = {test}/>
                ))}
            </div>
        </div>
    );
}

export default TPreTests;