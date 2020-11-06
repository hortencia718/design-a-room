import React, { Component } from 'react';

class CollectionShowPage extends Component {


        // componentDidMount(){
        //     fetch()
        //     .then()
        //     .then()
        // }


    render() {
       console.log(this.props)
        return (
            <div>
                <h1>Kitchen</h1>
                <br></br>
                 <div className="flex-container">  
                 <br></br> 
                  <div className="flex-item colors">1</div>
                   <div className="flex-item colors">2</div>
                     <div className="flex-item colors">3</div>
                </div>
            </div>
        );
    }
}

export default CollectionShowPage;