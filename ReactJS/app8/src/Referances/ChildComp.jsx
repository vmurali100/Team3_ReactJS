import React, { Component } from 'react'

export default class ChildComp extends Component {
    showInputMsg=()=>{
        alert('Hello from child component ')
    }
    render() {
        return (
            <div>
                <input type="text" />
            </div>
        )
    }
}
