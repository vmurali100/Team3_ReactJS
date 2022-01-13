import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllTodosActions } from './action'

 class Todos extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={()=>{this.props.getAllTodosFunc()}}>get todos</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state)
    return{
        todos:state
    }
}
function dispatchStateToProps(dispatch) {
    return{
        getAllTodosFunc:()=>dispatch(getAllTodosActions())
    }
}
export default connect(mapStateToProps,dispatchStateToProps)(Todos)
