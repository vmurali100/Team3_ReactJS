import React, { Component } from 'react'

export default class Unmounting4 extends Component {
    componentWillUnmount(){
        alert("Remove numbers")
    }
    render() {
        return (
            <div>
                <h2> Even Numbers</h2>
            </div>
        )
    }
}