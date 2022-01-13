import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllCommentsAction } from './action'

 class Comments extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={()=>this.props.getAllCommentsFunc()}>get comments</button>
           {/* {this.props.comments.map((cmt)=>{
  return <ul>
      <li>{cmt.id}</li>
  </ul>
           })} */}
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state)
    return{
        comments:state
    }
}
function mapDispatchToProps(dispatch) {
    return{
        getAllCommentsFunc:()=>dispatch(getAllCommentsAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Comments)