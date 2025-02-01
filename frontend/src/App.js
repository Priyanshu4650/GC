import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'; 
import Home from './pages/Home'; 
import Events from './pages/Events';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Router>
      <Navbar />
          <Routes>
            <Route path='/' element={<Home title='Home' />}/>
            <Route path='events' element={<Events title='Events'/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
