import React from 'react';
 import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Login from './Components/login'

class App extends React.Component {

// state={
//   username: " ",
//   email:" ",
  
// }

render (){

  return(
    <div className="App">
      <h1 className="rainbow-text">Color me a Room</h1>
      <Login />
     
    </div>
  )
}
}

export default App