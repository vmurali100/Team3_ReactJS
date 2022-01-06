import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getALLPost } from './Action'

class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    getDataPosts=()=>{
        console.log(this.props)
         return this.props.dispatch(getALLPost())

    }
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.getDataPosts}>Click </button>
                {this.props.posts && this.props.posts.map((post)=>{
                    return <ul>
                        <li>User ID : {post.userId}</li>
                        <li>ID : {post.id}</li>
                        <li>Title: {post.title}</li>
                        <li>Body: {post.body}</li>
                    </ul>
                })}
            </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     return this.props.dispatch(getALLPost())
    // }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        posts:state
    }
}

export default connect(mapStateToProps)(Post)