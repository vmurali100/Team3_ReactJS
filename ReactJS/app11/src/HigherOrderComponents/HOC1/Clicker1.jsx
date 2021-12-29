import React, { Component } from 'react'
import { Sample1 } from './Sample1'

class Clicker1 extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.count}</h2>
                <button onClick={this.props.hadleCount}>click</button>
            </div>
        )
    }
}
export default Sample1(Clicker1)
