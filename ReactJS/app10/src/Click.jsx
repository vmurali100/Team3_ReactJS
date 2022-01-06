import React, { Component } from 'react'

export default class Click extends Component {
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>click me</button>
            </div>
        )
    }
}
