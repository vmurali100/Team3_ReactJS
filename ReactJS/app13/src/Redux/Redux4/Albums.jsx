import React, { Component } from 'react'
import {connect} from 'react-redux'

import { getAllAlbums } from './action4'

class Albums extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log(this.props)
    }
    
    
    render() {

        return (
            <div>
                <button onClick={()=>{this.props.getAllAlbums()}}>Click</button>
             </div>
        )
    }
}
function mapStateToprops(state) {
    console.log(state)
    return {
        albums:state
    }
}
function mapDispatchtoProps(dispatch) {
    
    return {
        getAllAlbums:()=>dispatch(getAllAlbums())
    }
}
export default connect(mapStateToprops,mapDispatchtoProps)(Albums)