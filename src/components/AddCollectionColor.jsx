import React, { Component } from 'react'


export default class AddCollectionColor extends Component {


                //handles color change for circle picker
                handleClick =(evt)=>{
                    alert("your color has been added to your collection");
                // console.log("addcollection", this.props.room.color)
                this.props.changeSelectedColor(evt.target.value, this.props.room)
                }


            // this r/t colors to user profile page

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
