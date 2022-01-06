import React, { Component } from 'react'
import { connect } from 'react-redux'

class Colors extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                
            </div>
        )
    }
}
function mapColorsProps(state){
    return (
        {colors:state.colors}
    )
}
export default connect(mapColorsProps)(Colors)