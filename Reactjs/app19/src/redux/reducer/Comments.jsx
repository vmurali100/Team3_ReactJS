import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllComments } from '../actions'


 class Comments extends Component {
    showComments=()=>{
        this.props.dispatch(getAllComments())
    }
    render() {
        return (
            <div>
                <h2>Click on Comments details</h2>
                <button onClick={this.showComments}>Comments</button>
                {/* {this.props.Comment.comments.map((cmt)=>{
                return <h4>{cmt.id}<br/>{cmt.name}<br/>{cmt.mail}<br/>{cmt.body}</h4>
                })} */}
            </div>
        )
    }
}
function stateToProps(state) {
    return{
        comments:state
    }
}
export default connect(stateToProps)(Comments)