import React, { Component } from 'react'

export  class ReffChild extends Component {
    Hello=()=>{
        alert("Hello remove this data")
    }
    render() {
        return (
            <div>
                <input type="text" />
            </div>
        )
    }
}
