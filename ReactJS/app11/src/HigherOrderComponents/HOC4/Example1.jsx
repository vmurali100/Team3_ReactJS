import React, { Component } from 'react'
import { Sample4 } from './Sample4'

 class Example1 extends Component {
    render() {
        return (
            <div>
                <h2 onMouseOver={this.props.hideImage} onMouseOut={this.props.Imageback}>Image:{this.props.image}</h2>
            </div>
        )
    }
}
export default Sample4(Example1)