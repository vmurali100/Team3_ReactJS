import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getAllPostAction } from './action6'
class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log(this.props)
    }
    
    
    render() {

        return (
            <div>
                <button onClick={()=>{this.props.getAllposts()}}>Click</button>
             </div>
        )
    }
}
function mapStateToprops(state) {
    console.log(state)
    return {
        posts:state
    }
}
function mapDispatchtoProps(dispatch) {
    
    return {
        getAllposts:()=>dispatch(getAllPostAction())
    }
}
export default connect(mapStateToprops,mapDispatchtoProps)(Post)