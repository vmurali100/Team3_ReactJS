import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllCommentsAction } from './actions'

class Comments extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={()=>{this.props.getAllComments()}}>get comments</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        comments:state
    }
}
function mapDispatchToProps(dispatch){
    return{
        getAllComments:()=>dispatch(getAllCommentsAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Comments)