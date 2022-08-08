import React, { useState } from 'react'
import '../styles/explore.scss'

function Explore() {
  const [modal, setModal] = useState(false);
  const toggleModal = () =>{
    setModal(!modal)
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">Create a Post</button>
      
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>New Post</h2>
            <label>Title: </label>
            <input text="text"></input>
            <br />
            <label>Description: </label>
            <input text="text"></input>
            <br />
            <input type="file"></input>
            <br />
            <button>Make Post</button>        
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  )
}


export default Explore