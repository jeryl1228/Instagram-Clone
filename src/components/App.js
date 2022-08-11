import "../styles/app.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
// import Inbox from "./Inbox";
import CreatePost from "./CreatePost";
import Notifications from "./Notifications.js";
import ProfileMain from "./ProfilePage/ProfileMain";

import MessageMain from "./Message/MessageMain";

import { createContext, useState } from "react";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={user}>
      <Routes>
        <Route path="/" element={<Home setUser={setUser} />} />
        <Route path="/inbox" element={<MessageMain setUser={setUser} />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<ProfileMain setUser={setUser} />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;