import React from 'react'
// import { NavLink } from 'react-router-dom'
// import React, {Component}from 'react';


function UserProfile(props) {
  let  handleClick=(evt) =>{
        console.log("hello")
    }

    let roomArray= props.rooms.map((room) => {
        return <div>
            <li onClick={handleClick}>

                {room.name}
            </li>
            <div className="RoomCollection">
               
            </div>


        </div>
    })
    return (
        <div className= "Containter">
           <div className ="RoomCollection">
               <br></br>
               <h2> My Collection</h2>
               {roomArray}
               
               </div> 
            
        </div>
    )
}

export default UserProfile
