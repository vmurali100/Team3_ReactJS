import React, { Component } from 'react'
import { HOC1 } from './HOC1'

 class Clicker extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleCount}>Click multiple times:{this.props.count}</button>
            </div>
        )
    }
}
export default HOC1(Clicker)
