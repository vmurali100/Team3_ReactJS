import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPostsAction } from './actions/action'

class Posts extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button type='button' onClick={()=>{ this.props.getAllPostsFunc() }}>GetPosts</button>
                {/* { this.props.posts.map((post) => {
                    return <ul>
                        <li>Post Id: {post.id}</li>

                        <li>Post Title:{post.title}</li>
                        <li>Post Body:{post.body}</li>
                    </ul>
                })} */}
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        posts: state
    }
}
function dispatchStateToProps(dispatch) {
    return {
        getAllPostsFunc: () => dispatch(getAllPostsAction())
    }

}
export default connect(mapStateToProps, dispatchStateToProps)(Posts)