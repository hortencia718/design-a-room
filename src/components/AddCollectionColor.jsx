import React, { Component } from 'react'


export default class AddCollectionColor extends Component {


               
                handleClick =(evt)=>{
                
                // console.log("addcollection", this.props.room.color)
                this.props.changeSelectedColor(evt.target.value, this.props.room)
                }


           
                // r/t colors to the user profile
                render() {
                    // console.log(this.props)
                    let turnColorsToLi =(hexcolor) => {
                    return hexcolor.map(color => {
                        
                        return <li key={color.id} style ={{color: "${color.hex_color}"}}>{color.hex_color}</li>
                        })
                    } 
                    
                        // console.log(this.props.colors)
                        let arrayOfColors = this.props.colors.map((colors) =>{
                        return <option key={colors.id} value={colors.id}>{colors.hex_number}</option>
                        })

                return (
                    <div>
                        
                        <form >
                            {/* <button className="select-hex-colors"></button> */}
                        <select onClick= {this.handleClick} className="hex-colors">
                            {arrayOfColors}
                            </select>
                        </form>   
                    </div>
        )
    }
}
