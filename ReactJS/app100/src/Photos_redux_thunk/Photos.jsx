import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPhotosAction } from './action'

class Photos extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={()=>{this.props.getAllPhotosFunc()}}>get photos</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        photos:state
    }
}
function dispatchStateToProps(dispatch) {
    return{
        getAllPhotosFunc:()=>dispatch(getAllPhotosAction())
    }
}
export default connect (mapStateToProps,dispatchStateToProps)(Photos)