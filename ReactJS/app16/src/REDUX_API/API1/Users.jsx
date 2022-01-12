import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getAllUsersAction } from './actions'

 class Users extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={()=>{this.props.getAllUsersFunc()}}>get users</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        users:state
    }
}
function mapDispatchToProps(dispatch){
    return{
        getAllUsersFunc:()=>dispatch(getAllUsersAction())
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(Users)