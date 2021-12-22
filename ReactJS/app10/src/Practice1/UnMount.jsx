import React, { Component } from 'react'

export default class UnMount extends Component {
    componentWillUnmount(){
        alert("remove here")
    }
    render() {
        return (
            <div>
                <h2>Hello i'am visible here</h2>
            </div>
        )
    }
}
