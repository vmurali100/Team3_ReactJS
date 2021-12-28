import React, { PureComponent } from 'react'

export default class Purecomp extends PureComponent {
    render() {
        console.log('Hello from pure component render')
        return (
            <div>
                <h2>{this.props.message}</h2>
                <p>Hello from pure component</p>
            </div>
        )
    }
}
