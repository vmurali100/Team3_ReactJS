import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Sample1 extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.sample1.map((val)=>{
                    return <li>{val}</li>
                })}
            </div>
        )
    }
}
function stateToProps(state) {
    return {
        sample1:state.sample1
    }
}
export default connect(stateToProps)(Sample1)