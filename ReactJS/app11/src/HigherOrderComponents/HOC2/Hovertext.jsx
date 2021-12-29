import React, { PureComponent } from 'react'
import { Sample2 } from './Sample2'

 class Hovertext extends PureComponent {
    render() {
        return (
            <div>
                <h2 onMouseOver={this.props.handleClick}>Message is:{this.props.message}</h2>
            </div>
        )
    }
}
export default Sample2(Hovertext)
