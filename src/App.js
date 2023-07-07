
import './App.css';
import Body from './Components/Body';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './Components/About';


function App() {
  const backgroundColor = ()=>{
    document.body.style.backgroundColor = '#1ed760';
  }

  backgroundColor();
  return (
      <>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Body/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
      </Router>
      
      
      </>
  );
}

export default App;
