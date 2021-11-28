import React, { Component } from 'react'

export  function Events() {
function clickeHandler(){
    console.log('clicked button')
}

    
    return (
        <div>
            <button onClick={()=>clickeHandler()}>click</button>
        </div>
    )
}


export default function Events1() {
  function Clicked() {
      console.log('clicking button')
  }
    return (
        <div>
            <button onClick={()=>Clicked()}>clickMe</button>
        </div>
    )
}


export  class Events2 extends Component {
    
    render() {
      function CLICK() {
          console.log('clicked Class Button')
      }
        return (
            <div>
                <button onClick={()=>CLICK()}>CliCk</button>
            </div>
        )
    }
}

