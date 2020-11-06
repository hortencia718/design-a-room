import { render } from '@testing-library/react';
import React from 'react'
import {CirclePicker} from 'react-color';


class  RoomCollection extends React.Component {
  
    state ={
        background: '#fff',
        color_id:[]
    };

            // color controls what color is active on the color picker
            handleChange(color,evt){
                color = {
      hex: '#333',
      rgb: {
        r: 51,
        g: 51,
        b: 51,
        a: 1,
    
      }
     
    }
  }
            

        handleChangeComplete =(color) => {
            // debugger
            console.log(color)
            this.setState({ background: color.hex });
           
            };
        

            handleSubmit =(evt) =>{
               
                // debugger
                fetch(`http://localhost:3000/colors`,{
                    method: "POST",
                    headers: {
                        "Content-Type": "Application/json"
                    },
                    body: JSON.stringify({
                        hex_number: this.state.background
                    })

                })
                .then(res => res.json())
                .then(color =>{
                    console.log(color)
                })
                    
            }

    
    render(){
        console.log(this.state)
    return (
        <div className="color-picker">
            <h2>Pick a color</h2>
            <input type="color" value="#ffffff"></input>
            
            <CirclePicker color={this.state.color_id} onChangeComplete={this.handleChangeComplete}/>

            <div>
                <button onClick={this.handleSubmit}>Submit</button>

                <section>
                    <div className="picked-color">
                        <ul></ul>

                    </div>
                </section>

                <div className="trash">Edit</div>
                <div className="clear">Clear</div>
                <div className="keep">AddToCollection</div>

                </div>
            </div>
    )
  }
} 

export default RoomCollection
