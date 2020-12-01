import React, { Component } from 'react';

class CollectionShowPage extends Component {


        
        //     fetch(`http://localhost:3000/rooms)
        //     .then(res => res.json())
        //     .then(()=>{})
       

    // this page is roomcollection page !
    render() {
    //    console.log(this.props)
        return (
            <div>
                <h1></h1>
                <div className="button"></div>
                <br></br>
                <button type="submit" className="butty">Edit Collection</button>
                <br></br>
                {/* <button type="submit" className="add">Submit</button> */}
                 <div className="flex-container"> 
                 <br></br> 
                  <div className="flex-item colors">1</div>
                   {/* <div className="flex-item colors">2</div> */}
                    {/* <div className="flex-item colors">3</div> */}
                </div>
                
              
                  
            </div>
        );
    }
}

export default CollectionShowPage;