import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Image extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.images}
            </div>
        )
    }
}
function MyImage(state) {
    return(
        {images:state.images}
    )
    
}
export default connect(MyImage)(Image)