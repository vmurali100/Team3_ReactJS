import React, { Component } from 'react'

export default class Child extends Component {
    componentWillUnmount(){
        alert("remove here")
    }
    render() {
        return (
            <div>
                <h2>visisble here</h2>
            </div>
        )
    }
}
