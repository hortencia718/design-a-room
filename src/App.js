import React, {Component}from 'react';
 import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import LoginForm from './components/LoginForm'
// import SignupForm from './components/SignupForm'
import {BrowserRouter, Route, Redirect, Router, Switch, Link } from 'react-router-dom'
import UserProfile from './components/UserProfile'
import {CirclePicker} from 'react-color';
import RoomCollection from './components/RoomCollection';
import CollectionShowPage from './components/CollectionShowPage';
import EditRoomForm from './components/EditRoomForm';




class App extends React.Component {

  state = {
  user:[],
  error:"",
  redirectUserProfile: false,
  rooms:[],
  colors:[]
  }

  //  handleLogin =(userInfo) => {
  // //  console.log(userInfo)
  //   fetch("http://localhost:3000/users/login",{
  //     method: "POST",
  //      headers: {
  //       "Content-Type": "Application/json"
  //     },
  //     body: JSON.stringify({
       
  //       email: userInfo.email,
  //       password: userInfo.password
  //     })
  //   })
  //       .then(res => res.json())
  //       .then((data) =>{
  //         debugger

  //         this.setState({
  //           user: data,
  //           redirectUserProfile :true
  //         })
  //         // if(data.error){
  //         //   this.setState({
  //         //     error: data.error
  //         //   })
  //         // }else {

  //         //   this.setState({
  //         //     user: data.user,
  //         //     redirectUserProfile: true
  //         //   })

  //           })
        

           
  //  }

// get user bkend one user 
// componentDidMount(){
//   fetch(`http://localhost:3000/users`)
//   .then(res => res.json())
//   .then(users =>{
//     // console.log(this.state)
//     this.setState({
//       user: users[0]
//     })
//   })
// }


      getUser=(user)=>{
        this.setState({
          user: user,
          redirectUserProfile: true
        })
      }

      // this function below is getting all the room from the backend and setting the state
      // to all the rooms which is an array 

      componentDidMount(){
        fetch(`http://localhost:3000/rooms`)
   .then(res => res.json())
   .then(roomsArray =>{
     this.setState({
       rooms: roomsArray,
       name:""
     })
  })
  //   fetch()
    // }fetch to colors here !
      }

      // working on creating a room here fucntion will be sent to the form as prop
      createNewRoom=(newroom)=>{
        let copyOfRooms = [newroom,...this.state.rooms]
        this.setState({
          rooms: copyOfRooms
        })
        console.log(newroom, "in app")
      }

      // this is updating a room
      updateRoomFromState=(updatedRoom)=>{
        let updatedArray= this.state.rooms.map((room)=>{
          if(room.id === updatedRoom.id){
            return updatedRoom
          }else{
            return room
          }
        })
        this.setState({
          rooms:updatedArray
        })
      }

        // deleting a
      deleteroomFromState=(deletedRoom) =>{
        let updatedArray= this.state.rooms.filter(room => room.id !== deletedRoom.id)
        this.setState({
          rooms:updatedArray
        })
      }



  render (){
    // if(this.state.redirectUserProfile){
    //   return<Redirect to="userprofile"/>
    // }



   console.log(this.state.rooms)
  return(
    <div className="App">
      <br></br>
       <h1 className="rainbow-text">Color me a Room</h1>
        <br></br>
        

        {/* container for routes and switch */}
          <main>
           {/* <LoginForm  handleSubmit={this.handleSubmit}/> */}
                    {/* <Router path="/SignupForm/:user_id" component={loginFrom} */}
                   {/* <Route path="/LoginForm" render={() => <UserProfile />} /> */}
                   
                    <Switch>

                     <Route path="/login">
                        <LoginForm getUser={this.getUser}/> 
                       </Route>

                      <Route path="/userprofile">
                      <UserProfile rooms={this.state.rooms} createNewRoom={this.createNewRoom} 
                      deleteroomFromState={this.deleteroomFromState} 
                      updateRoomFromState={this.updateRoomFromState}/>
                     </Route>
                     <Route path ="/:id"
                     render = {(routerProps) => <CollectionShowPage colors={this.state.colors} routerProps={routerProps}/>}/>
                     <Route path = "/"
                      render ={() => <RoomCollection/>}
                    // {this.updateRoomFromState}
                     />
                     <EditRoomForm/>
                  
                   </Switch>   
          </main>
           
                {/* create a link to links  */}
          

    
             
               
            
    
    
    </div>

      

  )
 }
}

export default App