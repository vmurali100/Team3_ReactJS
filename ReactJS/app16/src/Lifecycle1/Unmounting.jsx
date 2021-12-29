import React, { Component } from 'react'

export default class Unmounting extends Component {
    componentWillUnmount(){
        alert("Removing Now")
    }
    render() {
        return (
            <div>
                <h2>Counting</h2>
            </div>
        )
    }
}
