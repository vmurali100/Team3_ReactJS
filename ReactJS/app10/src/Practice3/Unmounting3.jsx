import React, { Component } from 'react'

export default class Unmounting3 extends Component {
    componentWillUnmount(){
    alert("changing message here")
    }
    render() {
        return (
            <div>
                <h2>First message here</h2>
            </div>
        )
    }
}
