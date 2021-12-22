import React, { Component } from 'react'

export default class Unmounting2 extends Component {
    componentWillUnmount(){
    alert("remove now")
    }
    render() {
        return (
            <div>
                <h2>Visible here</h2>
            </div>
        )
    }
}
