import "../styles/app.scss";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
// import Inbox from "./Inbox";
import CreatePost from "./CreatePost";
import Notifications from "./Notifications.js";
import ProfileMain from "./ProfilePage/ProfileMain";
import MessageMain from "./Message/MessageMain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inbox" element={<MessageMain />} />
      <Route path="/createpost" element={<CreatePost />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/profile" element={<ProfileMain />} />
    </Routes>
  );
}

export default App;
