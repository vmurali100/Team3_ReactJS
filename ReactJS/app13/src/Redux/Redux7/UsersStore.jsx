import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getAllUserStoreAction } from './action7'

class UserStore extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log(this.props)
    }
    
    
    render() {

        return (
            <div>
                <button onClick={()=>{this.props.getAllUserStore()}}>Click</button>
             </div>
        )
    }
}
function mapStateToprops(state) {
    console.log(state)
    return {
        users:state
    }
}
function mapDispatchtoProps(dispatch) {
    
    return {
        getAllUserStore:()=>dispatch(getAllUserStoreAction())
    }
}
export default connect(mapStateToprops,mapDispatchtoProps)(UserStore)