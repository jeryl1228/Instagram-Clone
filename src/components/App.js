import "../styles/app.scss";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Inbox from "./Inbox";
import CreatePost from "./CreatePost";
import Notifications from "./Notifications.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/createpost" element={<CreatePost />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  );
}

export default App;
