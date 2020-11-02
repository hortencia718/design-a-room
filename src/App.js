import React from 'react';
 import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import LoginForm from './components/LoginForm'
// import SignupForm from './components/SignupForm'
import {Switch, Router} from 'react-router-dom'

class App extends React.Component {

  state = {
    id:0,
    firstname: "",
    lastname: "",
    email: "",
    password: ""
    
}

   handleSubmit =(userInfo) => {
   
    fetch("http://localhost:3000/users/login",{
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        firstname: userInfo.firstname,
        lastname: userInfo.lastname,
        email: userInfo.email,
        password: userInfo.password
      })
    })
        .then(res => res.json())
        .then((resp) =>{
          if(resp.error){
            // console.error(resp)
          }else {

            this.setState(resp)

            }
          })

        
   }


componentDidMount(){
  fetch(`http://localhost:3000/users`)
  .then(res => res.json())
  .then(users =>{
    // console.log(this.state)
    this.setState({
      user: users[0]
    })
  })
}

render (){
//  console.log(this.state.user)
  return(
    <div className="App">
      <br></br>
      <h1 className="rainbow-text">Color me a Room</h1>
      <br></br>
      <LoginForm  handleSubmit={this.handleSubmit}/>
      {/* <Router path="/LoginForm" render={this.renderForm}/> */}
      {/* <Router path="/SignupForm" render={} */}
     
    </div>
  )
}
}

export default App