import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export class LoginForm extends Component {

    state = {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      }


      handleSubmit = (evt) => {
          evt.preventDefault()
          this.props.handleSubmit(this.state)
           console.log(this.props.handleSubmit)
      }


        // handle this change login email/password
     handleChange = (evt) => {
        // let {firstname,lastname,email, password, value} = evt.target 
        // console.log(firstname, lastname, email,password, value)
        this.setState({
            [evt.target.name]: evt.target.value
            // [firstname]: value,
            // [lastname]: value,
            // [email]: value,
            // [password]:value
           
        })
    }





    render() {
        let {formName} = this.props
        // let {firstname,lastname, email, password} = this.state
        console.log(this.props)


            return (
                <div className ="base-container">
                     <h1>{formName}</h1>
                     <div className= "header">Login</div>
                    <div className="content">
                   <div className="image">
                        {/* <img src={loginImg}/> */}
                    </div>
                     <form className="form" onSubmit={this.handleSubmit} >
                    
                         {/* <div className="form-group">
                              <label htmlFor="Firstname">First name</label>
                              <input type="text" id="first name" 
                              name="firstname"
                               value={this.state.firstname}
                              onChange={this.handleChange}/> 
                             </div> */}

                             {/* <div className="form-group">
                              <label htmlFor="Lastname">Last name</label>
                              <input type="text" id="last name" 
                              name="lastname"
                              value={this.state.lastname}
                              onChange={this.handleChange}/> 
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
                            
                              
                      </div>
                           </form>
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
