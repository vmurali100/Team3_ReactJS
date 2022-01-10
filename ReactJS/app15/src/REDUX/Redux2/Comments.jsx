import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCommentsActions, DeleteCommentsActions, getAllComments } from './action'

class Comments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: {
                username: "",
                email: "",
                password: ""
            }
        }
    }

    getComments = () => {
        this.props.getAllComments();
    }
    DeleteComments = (comment) => {
        this.props.deletecommentsData(comment);
        // console.log(this.props)


    }
    handleChange = (e) => {
        let newcomments = { ...this.state.comments }
        newcomments[e.target.name]=e.target.value
         this.setState({comments:newcomments})
    }
    CreatePosts = () => {
        this.props.createCommentsData(this.state.comments);
    }
    render() {
        return (
            <div>
                {/* <button onClick={this.getComments}>get comments</button>
                <button onClick={this.DeleteComments}>delete</button> */}

                <form>
                    <label htmlFor="username">user name</label>
                    <input type="text" name="username" value={this.state.username} onChange={(e) => {
                        this.handleChange(e)
                    }} /><br />
                    <label htmlFor="email">email</label>
                    <input type="text" name="email" value={this.state.email} onChange={(e) => {
                        this.handleChange(e)
                    }} /><br />
                    <label htmlFor="password">password</label>
                    <input type="text" name="password" value={this.state.password} onChange={(e) => {
                        this.handleChange(e)
                    }} /><br />

                    <button type="button" onClick={this.CreatePosts}>click</button>
                </form>
                {this.props.comments && this.props.comments.map((comment) => {
                    return <ul>
                        {/* <h2 key={comment}>{comment.email}</h2> */}
                        <li>{comment.username}</li>
                        <li>{comment.email}</li>
                        <li>{comment.password}</li>
                        <button onClick={()=>this.DeleteComments(comment)}>delete</button>
                    </ul>
                })}

            </div>
        )
    }
}
function mapstatetoProps(state) {
    // console.log(state)
    return {
        comments: state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getCommentsData: () => dispatch(getAllComments()),
        deletecommentsData: (comments) => dispatch(DeleteCommentsActions(comments)),
        createCommentsData: (comment) => dispatch(createCommentsActions(comment))
    }
}
export default connect(mapstatetoProps, mapDispatchToProps)(Comments)
