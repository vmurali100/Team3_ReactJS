import React, { Component } from 'react'

export default class ChildRef3 extends Component {
    showWelcome=()=>{
        alert("welcome message")
    }
    render() {
        return (
            <div>
                <input type="text" />
            </div>
        )
    }
}
