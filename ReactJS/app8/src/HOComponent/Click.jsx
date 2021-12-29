import React, { Component } from 'react'
import { Hocompponent } from './Hocompponent'

 class Click extends Component {

    render() {
        return (
            <div>
                <h2>count val:{this.props.count}</h2>
                <button onClick={this.props.handleCount}>Click</button>

            </div>
        )
    }
}
export default Hocompponent(Click)