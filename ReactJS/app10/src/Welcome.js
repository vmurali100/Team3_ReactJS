import React, { Component } from 'react'

export default class Welcome extends Component {
   
    render() {
        return (
            <div>
                <h1>Welcome{this.props.name}</h1>
            </div>
        )
    }
}
