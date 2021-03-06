import React,{ Component, useState } from 'react'
import {Link} from 'react-router-dom'
import RoomForm from './RoomForm'
import EditRoomForm from './EditRoomForm'
import AddCollectionColor from './AddCollectionColor'



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
    

            let handleLogout= ()=>{
                props.logout()
            }
            
        let roomArray= props.rooms.map((room) => {
            // console.log(room)
            return <div>
                {/* link is linking to room collection/color picker */}
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
             <AddCollectionColor colors={props.colors} changeSelectedColor={props.changeSelectedColor} room={room} />
                    
             <div className="RoomCollection">
                {room.collections.map((collection) =>{
                    // console.log(collection)
                return <div className="hex"style={{backgroundColor: collection.color.hex_number}}>.</div>
                })}
  
                <br></br>


                        {/* boxes go here  */}

                 {/* <div className="flex-container">  */}
                  <br></br> 
                 <div className="card">
                     <div className="flex-card-container"></div>
                      <div className="card">
                       <div className="flex-card-container"></div> 
                  
                      </div>
                         </div>
                     {/* { <div className="flex-item colors"></div> } */}
                     </div>
                 </div>
 
       
    })
              let name = ` View My Collection` 
            //   let info=` you can create room, add a color delete a color update a room and remove a room`
           
            return (
               
                <div className= "Containter">
                    
                    <div className="logoutbtn">
                        {/* {props.token? */}
                        <button onClick={handleLogout}>Logout</button>
                        
                        </div>

                <div className ="RoomCollection">
                
               
               <div>
                 <h1> {name}</h1>
                 {/* <li>{info} </li> */}
                   </div> 
               {/* <button type="submit" className="add">Edit</button> */}
               {/* <button type="submit" className="delete">X</button> */}
                 <RoomForm createNewRoom={props.createNewRoom} />
                
                 <br></br>
               {roomArray}
             
                  </div>
              </div>
    )
}

export default UserProfile
