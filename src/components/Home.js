import React from 'react'
import '../styles/app.scss';
import Navigation from './Navigation'
import Cards from './Cards'
import SideBar from './Sidebar'

function Home() {
  return (
    <div className="App">
    <Navigation />
    <main>
      <div className="container">
        <Cards />
        <SideBar />
      </div>
    </main>
  </div>
  )
}

export default Home