import React, { Component } from 'react'

export default class ChildInputRef extends Component {
    showWelcome=()=>{
        alert("iam fromchild Input ref")
    }
    render() {
        return (
            <div>
                <input type="text" />
            </div>
        )
    }
}
