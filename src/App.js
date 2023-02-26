import logo from './logo.svg';
import './App.css';

import NavBar from './Components/NavBar';
import Auth from './Components/Auth';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Auth/>
      <Footer/>
    </div>
  );
}

export default App;
