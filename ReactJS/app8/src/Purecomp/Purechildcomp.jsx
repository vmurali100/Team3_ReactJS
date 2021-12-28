import React, { PureComponent } from 'react'

export default class Purechildcomp extends PureComponent {
    render() {
        console.log('pure component render')
        return (
            <div>
                <h3>{this.props.message}</h3>
                
            </div>
        )
    }
}
