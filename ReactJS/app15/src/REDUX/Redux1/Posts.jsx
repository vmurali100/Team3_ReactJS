import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPosts, deletePosts, getAllPosts } from './action'

class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: {
                fname: "",
                email: "",
                age: ""
            }
        }
    }

    getPosts = () => {
        this.props.getPostsData()
    }
    deletePosts = (post) => {
        // console.log(this.props)
        // this.props.deletePostsData()
        this.props.deletePostsData(post)
    }
    handleChange = (e) => {
        let newposts = { ...this.state.posts }
        newposts[e.target.name] = e.target.value
        this.setState({ posts: newposts })
    }
    CreatePosts = () => {
        this.props.createPostsData(this.state.posts)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <form>
                    <label htmlFor="fname">first name</label>
                    <input type="text" name="fname" value={this.state.fname} onChange={(e) => {
                        this.handleChange(e)
                    }} /><br />
                    <label htmlFor="email">email</label>
                    <input type="text" name="email" value={this.state.email} onChange={(e) => {
                        this.handleChange(e)
                    }} /><br />
                    <label htmlFor="age">age</label>
                    <input type="text" name="age" value={this.state.age} onChange={(e) => {
                        this.handleChange(e)
                    }} /><br />

                    <button type="button" onClick={this.CreatePosts}>click</button>
                </form>
                {/* <button onClick={this.getPosts}>get Posts</button>
                <button onClick={this.deletePosts}>delete Posts</button> */}

                {this.props.posts && this.props.posts.map((post, i) => {
                    return <ul>
                        <li>fname:{post.fname}</li>
                        <li>email:{post.email}</li>
                        <li>age:{post.age}</li>
                        <button onClick={() =>  this.deletePosts(post) }>delete</button>

                        <h1>{post.title}</h1>
                    </ul>
                 })}
            </div>
        )
    }
}
function mapStateToProps(state) {
    // console.log(state)
    return {
        posts: state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getPostsData: () => dispatch(getAllPosts()),
        deletePostsData: (posts) => dispatch(deletePosts(posts)),
        createPostsData: (posts) => dispatch(createPosts(posts))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts)
