import React, {Component}from 'react';
 import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import LoginForm from './components/LoginForm'
import {BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom'
import UserProfile from './components/UserProfile'
import {CirclePicker} from 'react-color';
import RoomCollection from './components/RoomCollection';
import CollectionShowPage from './components/CollectionShowPage';
// import EditRoomForm from './components/EditRoomForm';
import SignupForm from './components/SignupForm';
import { Modal } from 'semantic-ui-react';
// import {ChromePicker} from 'react-color';
// import AboutPage from './components/AboutPage';




class App extends React.Component {

  state = {
  user:[],
  token:"",
  error:"",
  rooms:[],
  colors:[],
  // collections:[]
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
            console.log("get user", user)
            this.setState({
              user: user.user,
              token: user.token,
            })
            this.props.history.push('/UserProfile')
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


          fetch(`http://localhost:3000/colors`)
          .then(res => res.json())
          .then(colorArray =>{
            this.setState({
              colors: colorArray,

            })
          })
            
            }

                // delete color from room 
            // deleteSelectedColor=(deletedcolor) =>{
            //   let updatedArray= this.state.rooms.filter(room => room.id !== deletedRoom.id)
            //   this.setState({
            //     rooms:updatedArray
            //   })
            // }
        

        changeSelectedColor=(color_id ,room) =>{
          // console.log("in change selected color", color_id)
          fetch(`http://localhost:3000/collections`,{
            method: "POST",
            headers: {
              "content-type": "application/JSON",
            },
            body: JSON.stringify({
              room_id: room.id,
              color_id: color_id,
              
            })
            
          })

           .then(resp => resp.json())
           .then(data =>{
            //  console.log("this is data", data)
             let foundRoom= this.state.rooms.find(
               individualRoom=> room.id === individualRoom.id)
           
              //  console.log(foundRoom)
            let copyOfCollection = [...foundRoom.collections, data]


              let copyOfRoom = {
                ...foundRoom,
                collections: copyOfCollection
              }

              // console.log("copy of Room", copyOfRoom.id)
            //  this.updatedRoomFromState(copyOfCollection)
            let copyOfRooms= this.state.rooms.map((room) => {
                    if(room.id === copyOfRoom.id){
                          return copyOfRoom
                      } else {
                          return room
                        }
                    })
                  this.setState({
                  rooms: copyOfRooms
                  })
        
          
          })
 
        }  
                
            
                updatedColorArrayFromState =(updatedColor) =>{ 
                  console.log("updatedColor", updatedColor)
                 
                    fetch(`http://localhost:3000/colors`,{
                      method: "POST",
                      headers: {
                          "Content-Type": "Application/json"
                      },
                      body: JSON.stringify({
                          hex_number: updatedColor,
                          
                      })

                  })
                  .then(res => res.json())
                  .then(newColor =>{
                    let copyOfColors = [...this.state.colors,newColor]

                    this.setState =({
                      colors: copyOfColors

                    })
                  })  
            }     
                
               
        
            createNewRoom=(newroom)=>{
              let copyOfRooms = [newroom,...this.state.rooms]
              this.setState({
                rooms: copyOfRooms
              })
              // console.log(newroom, "in app")
            }

            // this is updating a room
            updatedRoomFromState=(updatedRoom)=>{
              // debugger
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

              // deleting a room
            deleteroomFromState=(deletedRoom) =>{
              let updatedArray= this.state.rooms.filter(room => room.id !== deletedRoom.id)
              this.setState({
                rooms:updatedArray
              })
            }

          renderLogin=() => {
            return <LoginForm getUser={this.getUser}/>
          }

        renderSignup=() => {
          return <SignupForm />
        }

          logout=() =>{
            this.setState({
              user:[],
              token:"",
              error:"",
              rooms:[],
              colors:[]
            })
            this.props.history.push('/login')
          }

          render(){

          // console.log("this is state", this.state.colors)
          return(
            <div className="App">
              <br></br>
              <h1 className="rainbow-text">Color me a Room</h1>
                <br></br>
              

        {/* container for routes and switch */}
          <main>
          {/* <CirclePicker/> */}
           {/* <LoginForm  handleSubmit={this.handleSubmit}/> */}
                    {/* <Router path="/SignupForm/:user_id" component={loginFrom} */}
                   {/* <Route path="/LoginForm" render={() => <UserProfile />} /> */}
                   
                    <Switch>

                     <Route path="/login" render={this.renderLogin}/>
                     <Route path="/signup" render={this.renderSignup}/>
                      <Route path="/userprofile">
                        <Route path="/">
                        {/* <AboutPage/> */}
                        </Route>
                      <UserProfile logout={this.logout} token={this.state.token} rooms={this.state.rooms} createNewRoom={this.createNewRoom} 
                      deleteroomFromState={this.deleteroomFromState} changeSelectedColor={this.changeSelectedColor}
                     updatedRoomFromState={ this.updatedRoomFromState} colors={this.state.colors}/>
                     
                        
                     </Route>
                     <Route path ="/:id"
                     render = {(routerProps) => <CollectionShowPage colors={this.state.colors} routerProps={routerProps}/>}/>
                     <Route path = "/"
                      render ={() => <RoomCollection newupdatedColors={this.updatedColorArrayFromState}/>}

                      // newupdatedColors={this.updatedColorArrayFromState}/>
                      
                    // {this.updateRoomFromState}
                     />
                     {/* <EditRoomForm updatedRoomFromState={this.updatedRoomFromState}/> */}
                    
                   </Switch>   
          </main>
           
            
          

    
             
               
            
    
    
    </div>

      

  )
 }
}

export default withRouter(App)