import React, { Component } from 'react'

export default class Child2 extends Component {
    showMsg=()=>{
        alert('helo from new child component')
    }
    render() {
        return (
            <div>
                <input type="text" />
            </div>
        )
    }
}
