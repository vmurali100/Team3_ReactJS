import React, { Component } from 'react'

export default class ArrayEle extends Component {
    render(props) {
        return (
            <div>
                {this.props.render()}
            </div>
        )
    }
}
