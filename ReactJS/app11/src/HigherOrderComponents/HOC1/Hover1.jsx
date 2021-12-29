import React, { Component } from 'react'
import { Sample1 } from './Sample1'

class Hover1 extends Component {
    render() {
        return (
            <div>
                <h2 onMouseOver={this.props.hadleCount}>On hover count is:{this.props.count}</h2>
            </div>
        )
    }
}
export default Sample1(Hover1)