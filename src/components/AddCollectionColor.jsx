import React, { Component } from 'react'

export default class AddCollectionColor extends Component {



    handleClick =(evt)=>{
    //    debugger 
    // console.log(this.props.room)
     this.props.ChangeSelectedColor(evt.target.value, this.props.room)
    }



    render() {
        // console.log(this.props)
        let turnColorsToLi =(hexcolor) => {
           return hexcolor.map(color => {
                console.log(color)
            return <li key={color.id} style ={{color: "${color.hex_color}"}}>{color.hex_color}</li>
            })
         } 
                // console.log(turnColorsToLi)

        // console.log(this.props.colors)
        let arrayOfColors = this.props.colors.map((colors) =>{
        return <option key={colors.id} value={colors.id}>{colors.hex_number}</option>
        })
        
        return (
            <div>
                
                <form >
                    {/* <button className="select-hex-colors"></button> */}
                   <select onChange= {this.handleClick}                     className="hex-colors">
                    {arrayOfColors}
               
                    </select>
                
                </form>

                
            </div>
        )
    }
}
