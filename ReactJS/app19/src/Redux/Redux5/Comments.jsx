
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllComments } from './Action'


class Comments extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    getComments=()=>{
         return this.props.dispatch(getAllComments())

    }
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.getComments}>Click to Display Data</button>
                {this.props.comments && this.props.comments.map((comment)=>{
                    return <ul>
                        <li>Post ID : {comment.postId}</li>
                        <li>ID : {comment.id}</li>
                        <li>Name: {comment.name}</li>
                        <li>Email: {comment.email}</li>
                        <li>Body: {comment.body}</li>
                    </ul>
                })}
            </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     return this.props.dispatch(getALLComments())
    // }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        comments:state
    }
}

export default connect(mapStateToProps)(Comments)