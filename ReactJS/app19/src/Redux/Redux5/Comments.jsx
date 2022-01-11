
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createComments, delCommentsData, deleteCommentsData, getAllComments } from './Action'


class Comments extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             comments:{
                 id:"",
                 name:"",
                 email:"",
                 body:""
             }
        }
    }
    getComments=()=>{
          this.props.getAllCommentsAction()

    }
    deleteComments=()=>{
        this.props.deleteCommentsAction()
    }
    createComments=()=>{
        this.props.createCommentsAction(this.state.comments)
    }
    changeValue=(e)=>{
        let newcomments={...this.state.comments}
        newcomments[e.target.name]=e.target.value
        this.setState({comments:newcomments})
    }
    deleteData=(comment)=>{
        this.props.deleteDataAction(comment)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <form >
                    <label htmlFor="id">Id:</label><br />
                    <input type="number" name="id" value={this.state.id} onChange={(e)=>{this.changeValue(e)}}/> <br />
                    <label htmlFor="name">Name:</label> <br />
                    <input type="text" name="name" value={this.state.name} onChange={(e)=>{this.changeValue(e)}}/> <br />
                    <label htmlFor="email">Email:</label> <br />
                    <input type="email" name="email" value={this.state.email} onChange={(e)=>{this.changeValue(e)}} /> <br />
                    <label htmlFor="body">Body:</label> <br />
                    <input type="text" name="body" value={this.state.body} onChange={(e)=>{this.changeValue(e)}}/> <br /> <br />
                    <button type='button' onClick={this.createComments}>Submit</button> <br /> <br />
                </form>
                <button onClick={this.getComments}>Click to Display Data</button>
                <button onClick={this.deleteComments}>Delete </button>
                
                {this.props.comments && this.props.comments.map((comment)=>{
                    return <ul>
                        {/* <li>Post ID : {comment.postId}</li> */}
                        <li>ID : {comment.id}</li>
                        <li>Name: {comment.name}</li>
                        <li>Email: {comment.email}</li>
                        <li>Body: {comment.body}</li> 
                        <button onClick={()=>{this.deleteData(comment)}} >Delete Data</button>
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
function mapDispatchtoProps(dispatch) {
    return {
        getAllCommentsAction:()=>dispatch(getAllComments()),
        deleteCommentsAction:()=>dispatch(deleteCommentsData()),
        createCommentsAction:(comments)=>dispatch(createComments(comments)),
        deleteDataAction:(comments)=>dispatch(delCommentsData(comments))
    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(Comments)