import React from "react";
import "../styles/app.scss";
import Navigation from "./Navigation";
import Cards from "./Cards";
import SideBar from "./Sidebar";

function Home({ setUser }) {
  return (
    <div className="App">
      <Navigation setUser={setUser} />
      <main>
        <div className="container">
          <Cards />
          <SideBar />
        </div>
      </main>
    </div>
  );
}

export default Home;
