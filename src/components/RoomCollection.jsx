import { render } from '@testing-library/react';
import React from 'react'
import {CirclePicker} from 'react-color';
// import {ChromePicker} from 'react-color';


class  RoomCollection extends React.Component {
  
    state ={
        background: '#fff',
        color_id:[],
        // collection_id: [],

        // displayColorPicker: false,
        // defaulColor: "#fff",
        //  changeColor: "#fff",
        color:{
            r: "0",
            g: "f",
            b: "153",
            a: "1"
        }
    };

                // color picker code 
            // this to handle the handle click on the color picker color option
            // handleClick=() =>{
            //     this.setState({displayColorPicker: true});
            // };

            // this handles close after click
            //  handleClose=() =>{
            //      this.setState({displayColorPicker: false});
                 
            //  };

            
                    // color picker code 
            // color controls what color is active on the color picker
            // // handleChange = color =>{
            //     this.setState({background: color.hex});
    //             color = {
    //   hex: '#333',
    //   rgb: {
    //     r: 51,
    //     g: 51,
    //     b: 51,
    //     a: 1,
    
    //   }
    
//   }
            
                // handles the change to the state for the circle picker on click 
            handleClick = (evt, colors) => {
                evt.preventDeault()
                // debugger
                // console.log(" when I click the color I get is")
                let newColors=[colors, ...this.state.colors]
                this.setState({
                colors:  newColors 
                })
            }
               

                // function to call everytime the color is changed store 
                // the color in state

                //  handleChange=(evt)=>{
                //     //  console.log(evt.target.value)
                //      this.setState({
                //          colors: evt.target.value
                //      })
                 
                //     //  color={
                //     //      hex:'#FF5722'
                //     //  }
                //  }

        handleChangeComplete =(color) => {
            this.setState({ background: color.hex });
           // debugger
           
            };

            
        

            handleSubmit =(evt) =>{
               console.log(evt)
                // debugger
                fetch(`http://localhost:3000/colors`,{
                    method: "POST",
                    headers: {
                        "Content-Type": "Application/json"
                    },
                    body: JSON.stringify({
                        hex_number: this.state.background,
                        
                    })

                })
                .then(res => res.json())
                .then(color =>{
                    // console.log(color)
                    // this.setState({color})
                })
                  
            }

    
    render(){
    

        // console.log("where are my colors", this.state)
    return (
       
        <div className="color-circle-picker">
            
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
            
            <CirclePicker handleClick= {this.handleClick} color={this.state.color_id} updatedColor={this.props.updatedColorArrayFromState}
            onChangeComplete={ this.handleChangeComplete }/>

            {/* once you pick a color saves it take color picked fetch and add to array of colors  */}
                {/* <button onClick={this.handleSubmit}>Submit</button> */}

                        {/* circle color */}
                    <section>
                        <div class="picked-color">
                            <ul></ul>
                        </div>
                    </section>
                {/* <div className="Container add collection button"> 

                {/* <div className="keep">AddToCollection</div> */}
                {/* <button type="submit" className="trash">save to</button> */}


               
                {/* <button type="submit" className="add">Save</button> */}
                {/* <button type="submit" className="addTo">colors </button> */}
                </div> 
            </div>
    )
    
  }
} 
           



export default RoomCollection ;
