import { render } from '@testing-library/react';
import React from 'react'
import {CirclePicker} from 'react-color';
// import {ChromePicker} from 'react-color';


class  RoomCollection extends React.Component {
  
    state ={
        background: '#fff',
    };

            

                handleChangeComplete =(color) => {
                    // alert("your color has been added to your collection")
                    // console.log("color", color)
                    this.setState({ background: color.hex });
                // debugger
                    this.props.newupdatedColors(this.state.background)
                };


                 handleSubmit =(evt) =>{
               
                //    console.log(evt)
                    // debugger
                    // fetch(`http://localhost:3000/colors`,{
                    //     method: "POST",
                    //     headers: {
                    //         "Content-Type": "Application/json"
                    //     },
                    //     body: JSON.stringify({
                    //         hex_number: this.state.background,
                            
                    //     })

                    // })
                    // .then(res => res.json())
                    // .then(color =>{
                    //     // console.log(color)
                    //     // this.setState({color})
                    // })
                    
                }

                     
            render(){
            
                // console.log("this props", this.props)
                // console.log("where are my colors", this.state)
            return (
                
                <div className="containter">
                    <h2>Explore Colors to add to your collections </h2> 
                <div>
                    

                </div>
                <div className="container">
                   <p className="select color">
                   <h3> Select a color from the CirclePicker</h3>
                  </p> 
 
                </div>
                   
                <div>
                     <br></br>
                 <div style={{color:this.state.background}}>
                    {/* <Button
                                className="select-color-btn"
                                onClick={this.handleClick}>
                                Select a color
                            </Button> }
                            { {this.state.displayColorPicker ?}() */}
                </div>
                                {/* this is for the color picker only not using */}
                <input  className= "colorpicker" type="color" value="#ffffff"></input>
                
                <CirclePicker color={this.state.color_id} updatedColor={this.props.updatedColorArrayFromState}
                onChangeComplete={ this.handleChangeComplete }/>

           
                {/* <button onClick={this.handleSubmit}>Submit</button> */}

                        {/* { circle color } */}
                      <section>
                        <div class="picked-color">
                            <ul></ul>
                        </div>

                    </section> 
              
                                {/* for input */}
                {/* <div className="keep">AddToCollection</div> */}
                {/* <button type="submit" className="trash">save to</button> */}


               
                 {/* <button type="submit" className="add">Save</button> */}
                 {/* <button type="submit" className="addTo"> added color </button> */}
                </div> 
            </div>
    )
    
  }
} 
           



export default RoomCollection ;
