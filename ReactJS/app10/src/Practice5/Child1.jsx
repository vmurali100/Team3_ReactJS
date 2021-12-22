import React, { Component } from 'react'

export default class Child1 extends Component {
    componentWillUnmount(){
        alert("Show message")
    }
    render() {
        return (
            <div>
                <h2>Message here</h2>
            </div>
        )
    }
}
