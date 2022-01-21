import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getallPhotos } from './action'

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
function mapStateToProps(state){
    return{
        photos:state
    }
}
function mapdispatchToProps(dispatch){
    return{
        getAllPhotosFunc:()=>dispatch(getallPhotos())
    }
}
export default connect(mapStateToProps,mapdispatchToProps)(Photos)