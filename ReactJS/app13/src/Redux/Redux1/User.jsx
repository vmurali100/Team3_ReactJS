import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getAllUserAction } from './action'
class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log(this.props)
    }
    
    
    render() {

        return (
            <div>
                <button onClick={()=>{this.props.getAllUser()}}>Click</button>
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
        getAllUser:()=>dispatch(getAllUserAction())
    }
}
export default connect(mapStateToprops,mapDispatchtoProps)(User)