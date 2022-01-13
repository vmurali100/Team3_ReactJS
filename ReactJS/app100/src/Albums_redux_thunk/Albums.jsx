import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAlbumAction } from './action'

 class Albums extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={()=>{this.props.getAllAlbumsFunc()}}>get album</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state)
    return{
        albums:state
    }
}
function dispatchStateToProps(dispatch) {
    return{
        getAllAlbumsFunc:()=>dispatch(getAlbumAction())
    }
}
export default connect(mapStateToProps,dispatchStateToProps)(Albums)