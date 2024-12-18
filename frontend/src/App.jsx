import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage'
import Home from './views/Home';
import Certificates from './views/Certificates';
import Achievements from './views/Achievements/Achievements';
import Wallet from './views/Wallet/Wallet';
import Event from './views/Event/Event';
import NewEvent from './views/NewEvent/NewEvent'
import TeenHackathon from './views/TeenHackathon/TeenHackathon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/event" element={<Event />} />
        <Route path="/new-event" element={<NewEvent />} />
        <Route path="/teen-hackathon" element={<TeenHackathon />} />
      </Routes>
    </Router>
  );
}

export default App;
