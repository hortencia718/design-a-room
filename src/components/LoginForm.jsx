import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export class LoginForm extends Component {

    state = {
        username: "",
        email: "",
        password: ""
      }


      handleSubmit = (evt) => {
          evt.preventDeFault()
          this.props.handleSubmit(this.state)
        //   console.log("username")
      }



     handleChange = (evt) => {
        let {name, value} = evt.target 
        this.setState({
            [name]: value
        })
    }



    render() {
        let {formName} = this.props
        let {username, email, password} = this.state
        // console.log(this.props.userame)


            return (
                <div className ="base-container">
                     <h1>{formName}</h1>
                     <div className= "header">Login</div>
                       
                     <br></br>
                    <div className="content">
                   <div className="image">
                        {/* <img src={loginImg}/> */}
                    </div>
                     <div className="form">
                         <div className="form-group">

                              <label htmlFor="username">User name</label>
                              <input type="text" id="username" 
                              name="username"
                              value={username}
                              onChange={this.handleChange}/> 
                             </div>
                             <div className="form-group">

                              <label htmlFor="email">Email</label>
                              <input type="email" name="email"
                            //    placeholder="email"
                              value={email}
                              onChange={this.handleChange}/>

                             </div>
                             <div className="form-group">
                              <label htmlFor="password">Password</label>
                              <input type="password" name="password"
                                       value={password}
                                       onChange={this.handleChange}/>
                             </div>
                           </div>
                         </div>
                         <div className="footer">
                             <button onSubmit={this.handleSubmit}
                             type="submit" value="submit" className="btn">Login</button>
                            
                              
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
