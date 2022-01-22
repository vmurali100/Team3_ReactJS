import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllAlbumsAction } from './action'

class Albums extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={()=>{this.props.getAllAlbumsFunc()}}>get albums</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        albums:state
    }
}
function mapDispatchToProps(dispatch){
    return{
        getAllAlbumsFunc:()=>dispatch(getAllAlbumsAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Albums)