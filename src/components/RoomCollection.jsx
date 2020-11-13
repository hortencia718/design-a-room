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
            <h2>Pick a Color</h2>
            {/* <p className= "how it works"> 
            how it works you select from the dropdown color picker for a color of your
            choice .
            then you place it  in your keep stack .
            </p> */}
            <div className="Conatiner fulid">
                

            </div>
          <div style={{color:this.state.background}}>
           
          </div>

            <input type="color" value="#ffffff"></input>
            
            <CirclePicker color={this.state.color_id} onChangeComplete={this.handleChangeComplete}/>

            
                {/* <button onClick={this.handleSubmit}>Submit</button> */}

               
                    <section>
                        <div class="picked-color">
                            <ul></ul>
                        </div>
                    </section>
                <div className="Container add collection button"> 

                {/* <div className="keep">AddToCollection</div> */}
                {/* <button type="submit" className="trash">save to</button> */}
                <br></br>
                <button type="submit" className="add">Save to</button>
                    
                </div>
            </div>
    )
  }
} 

export default RoomCollection
