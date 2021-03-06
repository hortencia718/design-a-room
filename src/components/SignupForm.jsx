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
                        <br></br>
                 <form className="form-signup" onSubmit={this.handleSubmit}>
                        <div className="form-sign-group">
                            <label htmlFor="Firstname">First name</label>
                            <input type="text" id="first name" 
                            classname="firstname"
                            value={this.state.firstname}
                            onChange={this.handleChange}/> 
                            </div> 

                      <div className="form-signup">
                            <label htmlFor="Lastname">Last name</label>
                            <input type="text" id="last name" 
                            classname="lastname"
                            value={this.state.lastname}
                            onChange={this.handleChange}/> 
                        </div> 

                        <div className="form-signup">

                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                        //    placeholder="email"
                            value={this.state.email}
                            onChange={this.handleChange}/>

                        </div>
                        <div className="form-signup">
                            <label className="password">Password</label>
                            <input type="password" className="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}/>
                        </div>
                            <div className="footer">
                        <button 
                            type="submit"className="btnSU" onClick={this.handleLogin}>Login</button>
                            <br></br>
                            <br></br>
                           
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
