import React, { Component } from 'react'
import { connect } from 'react-redux'

class States extends Component {
    render() {
        return (
            <div>
                {this.props.States.map((st,i)=>{
                   return <p key={i}><b>{st}</b></p>
                })}
            </div>
        )
    }
}
function mapStatesProps(state){
    return(
        {state}
    )
}
export default connect(mapStatesProps)(States)