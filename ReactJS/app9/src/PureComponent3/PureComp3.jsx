import React, { PureComponent } from 'react'

export default class PureComp2 extends PureComponent {
    constructor(props) {
        super(props)
    console.log("hello from pure component")
    }
    
    render() {
        return (
            <div>
                <h2>{this.props.message}</h2>
            </div>
        )
    }
}
