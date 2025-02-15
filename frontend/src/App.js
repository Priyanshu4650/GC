import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import AdminPanel from "./pages/Login";
import SportsPointsTable from "./pages/Points";
import Team from "./pages/Team";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home title="Home" />} />
          <Route path="events" element={<Events title="Events" />} />
          <Route
            path="/points-table"
            element={<SportsPointsTable title="Leaderboard" />}
          />
          <Route path="/login" element={<AdminPanel title="Admin Page" />} />
          <Route path="/team" element={<Team title="The Team" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
