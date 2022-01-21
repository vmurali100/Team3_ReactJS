import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPostsAction } from './action'

 class Posts extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={()=>{this.props.getAllPosts()}}>get posts</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        posts:state
    }
}
function mapDispatchToProps(dispatch){
    return{
        getAllPosts:()=>dispatch(getAllPostsAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Posts)