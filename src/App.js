import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Addbooks from './pages/Addbooks';
import Books from './pages/Books';
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar/>
      
      <Routes>
          <Route exact path='/' element ={<Home/>} />
          <Route exact path='/Books' element ={<Books/>} />
          <Route exact path='/Addbooks' element ={<Addbooks/>} />
          
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
