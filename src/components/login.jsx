import React, { Component } from 'react'
import ReactDOM from 'react-dom';



class login extends Component {

    

    // this.state ={
    //     username: ""
    // }

    //  handleSubmit =(e)=>{
    //      e.preventDefault()
    //          this.props.handleSubmit(this.state)
    //  }

        // handleChange =(e) => {
        //     let{username, value} = e.target
        //     this.setState({
        //         [username]: value
        //     })
        // }

    render(){
        // let {username, email} = this.state

    return (
            <form className="Login">
                <div>
                <label> Username</label>
                <input type="text" value= {this.state.username} />
                </div>
              {/* <label htmlFor="username">Username:</label> */}
              {/* <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/> */}
              {/* <label  htmlFor="email">Email:</label> */}
              {/* <input type="email" autoComplete="off" name="email" value={email} onChange={this.handleChange}/> */}
              {/* <input type="submit" value="Submit" className="auth"/> */}
              {/* <button className= "enter" onSubmit={this.handleSubmit}></button> */}
            </form>
          );
        }    
    
}

export default login;
