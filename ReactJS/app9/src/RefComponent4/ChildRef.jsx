import React, { Component } from 'react'

export default class ChildRef extends Component {
    showAlertMessage=()=>{
        alert("showAlertMessage")
    }
    render() {
        return (
            <div>
                <input type="text" />
            </div>
        )
    }
}
