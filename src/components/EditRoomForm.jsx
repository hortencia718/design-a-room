import React, { Component } from 'react'

 class EditRoomForm extends Component {

 state={
     name:""
 }

    handleRoomname=(evt)=> {
        this.setState({
            name: evt.target.value
        })
        // console.log(evt)
    }
        // fetch patch a room, 
        // app=> user profile-> editroomform
        handleSubmit=(evt)=>{
            evt.preventDefault()
            let roomId = this.props.room.id
            
            fetch(`http://localhost:3000/rooms/${roomId}`, {
                method: "PATCH",
                headers: {
                    "content-type": "Application/json"
                },
                body: JSON.stringify({
                    name: this.props.room.nameId

                })

            })
            .then(res => res.json())
            .then(updatedroom=>{
                this.props.state.handleRoomname(updatedroom)
            })
           

        }

    render() {
        console.log(this.props.room)

        return (
            // handlechange for room edit
          <form onSubmit= {this.handleSubmit} >
           
            <input type="text" name="room" value={this.state.name} onChange={this.handleRoomname}>

                </input> 
               
              
            <button type="submit" className="buddy">
              update
            </button>
            </form>
           
        )
    }
}
export default EditRoomForm