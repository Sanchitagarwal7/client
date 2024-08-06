import React from 'react';
import { useState } from 'react';
import { io } from 'socket.io-client'
const Lobby = () => {

  const [name, changeName] = useState("");
  const [roomName, changeRoom] = useState("");
  const [loading, setLoading] = useState(false);

  const handleName = (event)=>{
    changeName(event.target.value)
  }

  const handleRoom = (event)=>{
    changeRoom(event.target.value)
  }

  const handleSubmit = (event)=>{
      event.preventDefault();
      setLoading(true);

      const socket = io('https://localhost:3000');
  }

  return (
    <>
    <div className="viewPort">
      <div className="container heading">
        <div className="row">
          <div className="col-md-12 col-sm-4  my-5 mx-auto d-flex justify-content-center">
            <h1>Welcome to Connect-Hub</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-4 form-column mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="InputName">Enter your Room Username: </label>
                  <input type="text" className="form-control" id="InputName" aria-describedby="usernameHelp" placeholder="John Doe"
                    onChange={handleName}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="RoomId">Enter your Room ID: </label>
                  <input type="text" className="form-control" id="RoomId" placeholder="Reunion"
                    onChange={handleRoom}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Lobby;
