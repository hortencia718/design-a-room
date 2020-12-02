import React, { Component } from 'react'
// import {Button , Modal } from 'semantic-ui-react'



function Modal () {


        return (
            <div>
             <Modal
                // trigger={<Button>Show Modal</Button>}
                // newupdatedColors goes here?
                header='Reminder!'
                content='your color has bee added to your collection'
                actions={['Add', { key: 'done', content: 'added', positive: true }]}
             />
           
                
            </div>
        )
    
}
export default Modal
