import React,{ Component, useState } from 'react'
import {Link} from 'react-router-dom'
import RoomForm from './RoomForm'
import EditRoomForm from './EditRoomForm'


function UserProfile(props) {
    const [update, setUpdate] = useState(false)
   // handle delete here 
   let handleremovebtn =(room) =>{
    // console.log(room, "hello")

    fetch(`http://localhost:3000/rooms/${room.id}`,{
        method: "DELETE"  
    })
    .then(res => res.json())
    .then(deletedRoom =>{
        props.deleteroomFromState(deletedRoom)
        // console.log(deletedRoom)
        
    })
}
    const handleupdate= (evt) =>{
        console.log("hello")
    }


    console.log(props)
    let roomArray= props.rooms.map((room) => {
        console.log(room)
        return <div>
           <Link to={`/${room.id}`}>
           <li>
                {room.name}
            </li>
            </Link>
            <button className="removebtn" onClick={()=> handleremovebtn(room)}>Remove </button>
            <button className="update-room-name " onClick={e=> setUpdate(prestate=>!prestate)}> update</button>
            {update ? 
            <EditRoomForm room={room} updatedRoomFromState={props.updatedRoomFromState}/>
             : null}
             
            <div className="RoomCollection">
  
                <br></br>
            {/* boxes go here  */}
            <div className="flex-container"> 
            
                 <br></br> 
                  <div className="flex-item colors"></div>
                   <div className="flex-item colors"></div>
                     {/* <div className="flex-item colors">3</div> */}
                     </div>
            </div>
 
        </div>
    })

    return (
        <div className= "Containter">
           
           <div className ="RoomCollection">
           
               <h1> My Collection</h1>
               {/* <button type="submit" className="add">Edit</button> */}
               {/* <button type="submit" className="delete">X</button> */}
              <RoomForm createNewRoom={props.createNewRoom} />
                
                
             
               <br></br>
               {roomArray}
             
            </div>


             
                    
                {/* {/* <div className="button"></div> */}
               
                {/* <button type="submit" className="butty">submit</button> */} 
                
                 {/* <div className="flex-container"> 
                 <br></br> 
                  <div className="flex-item colors">1</div>
                   <div className="flex-item colors">2</div>
                     <div className="flex-item colors">3</div>
                     </div> */}
            
        </div>
    )
}

export default UserProfile
