import React, { PureComponent } from 'react'
import { Sample2 } from './Sample2'

 class Text extends PureComponent {
    render() {
        console.log("Hello from pure component")
        return (
            <div>
                <h2>{this.props.message}</h2>
                <button onClick={this.props.handleClick}>change</button>
            </div>
        )
    }
}
export default Sample2(Text)
