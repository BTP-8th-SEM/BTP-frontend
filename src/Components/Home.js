import PreTests from "./PreTests.js";
import UpTests from "./UpTests"
import "./../Styles/home.css"
const Home = () => {
    return (
        <div className="home">
            <div className="homeChild">
                <UpTests/>
            </div>

            <div className="homeChild">
                <PreTests/>
            </div>
        </div>
    );
}
export default Home;