import React, { PureComponent } from 'react'
import { Sample4 } from './Sample4'

 class Example2 extends PureComponent {
    render() {
        return (
            <div>
                <button onClick={this.props.hideImage}>Image hide</button>
                <button onClick={this.props.Imageback}>Image</button>
            </div>
        )
    }
}
export default Sample4(Example2)
