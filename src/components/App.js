import '../styles/app.scss';
import { Route, Routes } from 'react-router-dom';
import Login from './Login'
import Home from './Home'
import Inbox from './Inbox'
import Explore from './Explore'
import Notifications from './Notifications.js'

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  );
}

export default App;
