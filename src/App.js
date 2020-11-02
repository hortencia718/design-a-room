import React from 'react';
 import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import LoginForm from './components/LoginForm'
// import {Switch, Router} from 'react-router-dom'

class App extends React.Component {

  state = {
    username: {}
}

   handleSubmit =(userInfo) => {
    // console.log(userInfo);
    fetch("http://localhost:3000/user/login",{
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(userInfo)
    })
   }




componentDidMount(){
  fetch(`http://localhost:3000/users`)
  .then(res => res.json())
  .then(users =>{
    console.log(this.state)
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
      <LoginForm  UserName="hortencia"/>
      {/* <Router path="/loginForm" render={this.renderForm}/> */}
     
    </div>
  )
}
}

export default App