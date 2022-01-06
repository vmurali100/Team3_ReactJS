import React, { Component } from 'react'
import { connect } from 'react-redux'

class Images extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.Images}
            </div>
        )
    }
}
function mapPropsImage(state){
    return(
        {Images:state.Images}
    )
}
export default connect(mapPropsImage)(Images)