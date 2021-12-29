import React, { Component } from 'react'
import { Hocompponent } from './Hocompponent'

class Hover extends Component {
    render() {
        return (
            <div>
                <h2 onMouseOver={this.props.handleCount}>Hover count:{this.props.count}</h2>
            </div>
        )
    }
}

export default Hocompponent(Hover)