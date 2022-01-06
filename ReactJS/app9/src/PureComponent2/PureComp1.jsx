import React, { PureComponent } from 'react'

export default class PureComp1 extends PureComponent {
    constructor(props) {
        super(props)
    console.log("hello from pure component")
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.message}</h1>
            </div>
        )
    }
}
