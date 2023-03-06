import UpTestCard from './UpTestCard';
import './../Styles/up-tests.css'

const UpTests = () => {
    return (
        <div>
            <div className='cards-container'>
                <UpTestCard />
                <UpTestCard />
                <UpTestCard />
                <UpTestCard />
                <UpTestCard />  
            </div>
        </div>
    );
}

export default UpTests;