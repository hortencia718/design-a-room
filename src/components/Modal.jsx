import React, { Component } from 'react'




function Modal () {


        return (
            <div>
             <Modal
                // trigger={<Button>Added color</Button>}
                
                // newupdatedColors goes here?
                header='Reminder!'
                content='your color has bee added to your collection'
                actions={['Add', { key: 'done', content: 'added', positive: true }]}
             />
           
           <button class="ui button">Add color</button>
            </div>
        )
    
}
export default Modal
