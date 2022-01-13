import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getAllCommentsAction } from './action'

class Comments extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log(this.props)
    }
    
    
    render() {

        return (
            <div>
                <button onClick={()=>{this.props.getAllComments()}}>Click</button>
             </div>
        )
    }
}
function mapStateToprops(state) {
    console.log(state)
    return {
        comments:state
    }
}
function mapDispatchtoProps(dispatch) {
    
    return {
        getAllComments :()=>dispatch(getAllCommentsAction())
    }
}
export default connect(mapStateToprops,mapDispatchtoProps)(Comments)