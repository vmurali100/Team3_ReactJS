import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllSportsAction } from './action'

 class Sports extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={()=>{this.props.getAllSportsFunc()}}>get sports</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state)
    return{
        sports:state
    }
}
function dispatchStateToProps(dispatch) {
    return{
        getAllSportsFunc:()=>dispatch(getAllSportsAction())
    }
}
export default connect(mapStateToProps,dispatchStateToProps)(Sports)