import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export class LoginForm extends Component {

    render() {
        console.log(this.props.UserName)
        return (
            
                <div className ="base-container">
                     <div className= "header">Login</div>
                    <div className="content">
                   <div className="image">
                        {/* <img src={loginImg}/> */}
                    </div>
                     <div className="form">
                         <div className="form-group">
                              <label htmlFor="Username">User name</label>
                              <input type="text" name="username" placeholder="user name"/>
                             </div>
                             <div className="form-group">
                              <label htmlFor="Email">Email</label>
                              <input type="email" name="email" placeholder="email"/>
                             </div>
                             <div className="form-group">
                              <label htmlFor="Password">Password</label>
                              <input type="password" name="password" placeholder="password"/>
                             </div>
                           </div>
                         </div>
                         <div className="footer">
                             <button type="button" className="btn">Login</button>
                      </div>
                     </div>

           
            
        )
    }
}

export default LoginForm;
// only in class components props should never been 
// written w/o "this.props ""
// should be capitalized
// class always need a render that r/t one chunck of jsx < />
