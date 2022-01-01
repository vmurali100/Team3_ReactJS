import React, { Component } from 'react'

export default class Numbers extends Component {
    render(props) {
        return (
            <div>
                {this.props.render()}
            </div>
        )
    }
}
