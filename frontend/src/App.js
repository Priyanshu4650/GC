import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'; 
import Home from './pages/Home'; 
import Events from './pages/Events';
import Navbar from './components/Navbar';
import PointsTable from './pages/Points';

function App() {
  return (
    <div className="App">
        <Router>
      <Navbar />
          <Routes>
            <Route path='/' element={<Home title='Home' />}/>
            <Route path='events' element={<Events title='Events'/>}/>
            <Route path='/points-table' element={<PointsTable title='Leaderboard'/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
