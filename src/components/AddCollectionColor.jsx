import React, { Component } from 'react'

export default class AddCollectionColor extends Component {



    render() {
        console.log(this.props.colors)
        let arrayOfColors = this.props.colors.map((colors) =>{
            return <option key={colors.id} value={colors.hex_number}>{colors.hex_number}</option>
        })
        return (
            <div>
                <form >
            <select className="hex colors">
            {arrayOfColors}
                
            {/* control here option tag inhere  */}
            {/* value with color id/inner text hex number */}
            {/* add event listner to event prevent ! to form  */}
            </select>
                </form>
            </div>
        )
    }
}
