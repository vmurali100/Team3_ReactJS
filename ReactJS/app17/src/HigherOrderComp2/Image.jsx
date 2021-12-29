import React, { PureComponent } from 'react'
import { Parent } from './Parent'

 class Image extends PureComponent {
    
    render() {
        return (
            <div>
                <img style={{ height: "200px", width: "200px" }} src={this.props.url} alt="nature" />
                <br />
                <br />
                <button onClick={this.props.handleImage}>Click to view</button>
            </div>
        )
    }
}
export default Parent(Image)
