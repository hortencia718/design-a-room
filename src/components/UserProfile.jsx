import React from 'react'
import {Link} from 'react-router-dom'


function UserProfile(props) {
  let  handleClick=(evt) =>{
        console.log("hello")
    }

    let roomArray= props.rooms.map((room) => {
        console.log(room)
        return <div>
           <Link to={`/${room.id}`}>
           
           <li>
                {room.name}
            </li>

            </Link>
            <div className="RoomCollection">
            
            </div>


        </div>
    })
    return (
        <div className= "Containter">
           <div className ="RoomCollection">
            
               <h2> My Collection</h2>
             
               <br></br>
               {roomArray}
             
               
               </div> 
            
        </div>
    )
}

export default UserProfile
