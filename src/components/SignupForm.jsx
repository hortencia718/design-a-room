import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

export class SignupForm extends Component {
    
    state={
        firstname:"",
        lastname:"",
        email:"",
        password:""
    }
    
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value 
        })
    }

    handleSubmit=()=>{
        console.log("this is submit")
    }

    renderLogin=()=>{
        return this.props.history.push("/login")
    }


                        
    render() {
        return (
            <div>
                  <h1>SignUp</h1>
                 <form className="form-signup" onSubmit={this.handleSubmit}>
                     <div className="form-group">
                         <label htmlFor="Firstname">First name</label>
                         <input type="text" id="first name" 
                         name="firstname"
                          value={this.state.firstname}
                         onChange={this.handleChange}/> 
                        </div> 

                      <div className="form-group">
                         <label htmlFor="Lastname">Last name</label>
                         <input type="text" id="last name" 
                         name="lastname"
                         value={this.state.lastname}
                         onChange={this.handleChange}/> 
                        </div> 

                        <div className="form-group">

                         <label htmlFor="email">Email</label>
                         <input type="email" name="email"
                       //    placeholder="email"
                          value={this.state.email}
                         onChange={this.handleChange}/>

                        </div>
                        <div className="form-group">
                         <label htmlFor="password">Password</label>
                         <input type="password" name="password"
                                   value={this.state.password}
                                  onChange={this.handleChange}/>
                        </div>
                        <div className="footer">
                       <button 
                           type="submit"className="btn" onClick={this.handleLogin}>Login</button>
                          <br></br>
                           <br></br>
                        {/* <button type="submit" className="but">Signup</button>  */}
                    </div>
                      </form>

                      <div className="color-card">
                            {/* <h2>color</h2> */}
                      </div>

            </div>

                


        )
    }
}

export default withRouter (SignupForm)
