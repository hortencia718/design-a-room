import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

export class LoginForm extends Component {

    state = {
        // firstname: "",
        // lastname: "",
        email: "",
        password: ""
      }

        // handle submit for user login 
      handleSubmit =(evt) => {
        evt.preventDefault()
        console.log(this.props.getUser)
          fetch("http://localhost:3000/users/login",{
            method: "POST",
             headers: {
              "Content-Type": "Application/json"
            },
            body: JSON.stringify({
             
              email: this.state.email,
              password: this.state.password
            })
          })
              .then(res => res.json())
              .then((data) =>{
                // debugger
      
                this.props.getUser(data)
            
                // if(data.error){
                //   this.setState({
                //     error: data.error
                //   })
                // }else {
      
                //   this.setState({
                //     user: data.user,
                //     redirectUserProfile: true
                //   })
      
                  })
                }
    //   handle login submit
    //   handleSubmit = (evt) => {
    //       evt.preventDefault()
    //       this.props.handleLogin(this.state)
    //        console.log(this.state)
    //   }


        // handle this change login email/password
     handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
            
        })
    }

    handleSignUp=()=>{
      return this.props.history.push('/signup')
    }

    render() {
        let {formName} = this.props
        // let {firstname,lastname, email, password} = this.state
        console.log(this.props)


            return (
                <div className ="base-container">
                     <h1>{formName}</h1>
                     <div className= "header">Login</div>
                                    
                     <form className="form" onSubmit={this.handleSubmit}>
                            <div className="card"></div>
                              {/* <div classname="img">
                              <img src="/images/avatar2/large/elyse.png">
                              
                             </div> */}

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
                                type="submit"className="btn">Login</button>
                               <br></br>
                                <br></br>
                             <button type="submit" onClick={this.handleSignUp} className="but">Signup</button> 
                         </div>
                           </form>
                            </div>     
                     
                    //  </div>

           
            
            )
        }
    }

export default withRouter(LoginForm);
// only in class components props should never been 
// written w/o "this.props ""
// should be capitalized
// class always need a render that r/t one chunck of jsx < />
