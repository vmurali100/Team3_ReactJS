import React, { Component } from 'react'
import {connect} from 'react-redux'

import { getAllPhotos } from './action3'
class Photos extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log(this.props)
    }
    
    
    render() {

        return (
            <div>
                <button onClick={()=>{this.props.getAllPhotos()}}>Click</button>
             </div>
        )
    }
}
function mapStateToprops(state) {
    console.log(state)
    return {
        photos:state
    }
}
function mapDispatchtoProps(dispatch) {
    
    return {
        getAllPhotos:()=>dispatch(getAllPhotos())
    }
}
export default connect(mapStateToprops,mapDispatchtoProps)(Photos)