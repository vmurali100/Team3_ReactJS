import React, { Component } from 'react'

 class MouseHover extends Component {
    render() {
        return (
            <div>
                <h2 onMouseOver={this.props.handleCount}>Hover count:{this.props.count}</h2>
            </div>
        )
    }
}
export default HOC1(MouseHover)