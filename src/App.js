import React, {Component}from 'react';
 import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import LoginForm from './components/LoginForm'
// import SignupForm from './components/SignupForm'
import {BrowserRouter, Route, Redirect, Router, Switch } from 'react-router-dom'
import UserProfile from './components/UserProfile'

class App extends React.Component {

  state = {
  user:[],
  error:"",
  redirectUserProfile: false,
  rooms:[]
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



      componentDidMount(){
        fetch(`http://localhost:3000/rooms`)
   .then(res => res.json())
   .then(rooms =>{
     this.setState({
       rooms: rooms
     })
  })
    }





  render (){
    if(this.state.redirectUserProfile){
      return<Redirect to="userprofile"/>
    }



   console.log(this.state.user)
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
                      <UserProfile rooms={this.state.rooms} />
                     </Route>
                     {/* <Route component={NotFound}/> create a not found component for this */ }
                   </Switch>   
          </main>
           

          

    
             
               
            
    
    
    </div>

      

  )
 }
}

export default App