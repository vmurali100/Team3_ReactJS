import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createActioncmt, deleteMethod, dltCmtAction, getDataAction } from './action'

class Comments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: {
                id: "",
                name: ""
            }
        }
    }

    getData = () => {
        this.props.getcmtData()
    }
    deleteData = () => {
        this.props.deletecmt()
    }
    handleChange = (e) => {
        let newcomment = { ...this.state.comments }
        newcomment[e.target.name] = e.target.value
        this.setState({ comments: newcomment })
    }
    createCmt = () => {
        // console.log(this.props)
        this.props.createCommentData(this.state.comments)
    }
    dltComment=(comments)=>{
 this.props.dltCommentData(comments)
    }
   
    render() {
        console.log(this.props)
        return (
           <div>
                <h2>Hello</h2>
                <form >
                    <label htmlFor="id">Id</label>
                    <input type="text" name="id" value={this.state.id} onChange={(e) => { this.handleChange(e) }} /> <br />

                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => { this.handleChange(e) }} />
                </form>
                <button onClick={this.createCmt} type='button'>add</button>
                {/* <button onClick={this.getData}>Click</button>
                <button onClick={this.deleteData}>delete</button> */}
                {this.props.comments.map((cmt) => {
                    // return <p>Id:{cmt.id}  <br /> {cmt.name}</p>
                    return <h4>{cmt.id} <br />{cmt.name} --
                     <button onClick={()=>this.dltComment(cmt)}>dltCmt</button><br />
                     </h4>

                })}
            </div>
        )
    }
}
function stateToProps(state) {
    return {
        comments: state
    }
}
function mapStateToProps(dispatch) {

    return {
        getcmtData: () => dispatch(getDataAction()),
        deletecmt: () => dispatch(deleteMethod()),
        createCommentData: (comment) => dispatch(createActioncmt(comment)),
        dltCommentData:(comment)=>dispatch(dltCmtAction(comment))
    }
}
export default connect(stateToProps, mapStateToProps)(Comments)