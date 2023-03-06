import PreTests from "./PreTests.js";
import UpTests from "./UpTests"
import "./../Styles/home.css"
const Home = () => {
    return (
        <div className="home">
            <h2 className='Title'>
                Upcoming Tests
            </h2>
            <div className="homeChild">
                    <UpTests/>
            </div>
            <h2 className='Title'>
                Previous Tests
            </h2>
            <div className="homeChild">
                <PreTests/>
            </div>
        </div>
    );
}
export default Home;