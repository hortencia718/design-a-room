import React, { Component } from 'react';

class RoomForm extends Component {

    state={
        name:""
    }

            //target the name of the room 
            handleRoom=(evt)=> {
                this.setState({
                    name: evt.target.value
                })
            }


            // creating a new room 
            handleSubmit=(evt)=>{
                evt.preventDefault()
                evt.target.reset()
                fetch(`http://localhost:3000/rooms`,{
                    method: "POST",
                    headers: {
                        
                        "Content-Type": "Application/json",
                        
                    },
                    body: JSON.stringify({
                    name: this.state.name, 
                        user_id: 6
                    })
                })
                    .then(resp => resp.json())
                    .then(newroom => {
                        this.props.createNewRoom(newroom)
                        // console.log(newroom)
                    }

                    )
                }


        render() {
            // console.log(this.state.room)
            return (
                <form onSubmit= {this.handleSubmit}>
                    <div className="form-group-createRoom">

                {/* <label htmlFor="Room-Name"></label> */}

                 <br></br>
        
                 <br></br>
           
                <button type="submit" className="but">Create Room</button>
                        <br></br>
                        
                    <label htmlFor="Room-Name"></label>
                    <input type="text" classname="room"
                
                    value={this.state.room}
                    onChange={this.handleRoom}/>

                    </div>
                <div className="edit room name">
                {/* <button type="submit" className="but">update</button> */}
           
                </div>
            </form>
        );
    }
}

            

export default RoomForm;