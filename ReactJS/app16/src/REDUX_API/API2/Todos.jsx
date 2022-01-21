import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllTodosAction } from '../API2/actions'

 class Todos extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={()=>{this.props.getAllTodosFunc()}}>get todos</button>
                {/* {
                this.props.todos && this.props.todos.map((todo)=>{
                    return <p>{todo.title}</p>
                })} */}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        todos:state
    }
}
function mapDispatchToProps(dispatch){
    return{
        getAllTodosFunc:()=>dispatch(getAllTodosAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todos)

