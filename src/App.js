import React from 'react';
import 'semantic-ui-css/semantic.min.css'


let sayHello = () => {
  console.log("hello")
};

function App(){
  return(
    <div>
      <h1>Design me a room</h1>
      <h2>login form goes here</h2>
      <button onClick={sayHello}>hello</button>
    </div>
  )
}
export default App