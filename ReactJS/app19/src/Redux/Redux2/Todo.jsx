import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getALLTodos } from './action'

class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    getDataTodo=()=>{
         return this.props.dispatch(getALLTodos())

    }
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.getDataTodo}>Click to Display Data</button>
                {this.props.todos && this.props.todos.map((todo)=>{
                    return <ul>
                        <li>User ID : {todo.userId}</li>
                        <li>ID : {todo.id}</li>
                        <li>Title: {todo.title}</li>
                        <li>Completed : {todo.completed ? "True" : "False"} </li>
                    </ul>
                })}
            </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     return this.props.dispatch(getALLTodos())
    // }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        todos:state
    }
}

export default connect(mapStateToProps)(Todo)