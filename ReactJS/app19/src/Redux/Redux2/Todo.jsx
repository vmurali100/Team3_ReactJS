import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTodoAction, deleteTodo, getALLTodos } from './action'

class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todo:{
                 fName:"",
                 lName:""
             }
        }
        
    }
    getDataTodo=()=>{
        //  return this.props.dispatch(getALLTodos())
        this.props.getTodos()
    }
    deleteTodoData=()=>{
        this.props.deleteTodos()
    }
    changeTodo=(e)=>{
        let newTodo={...this.state}
        newTodo[e.target.name]=e.target.value
        this.setState({todo:newTodo})
    }
    createTodo=()=>{
        console.log(this.state.todo)
        this.props.createTodos(this.state.todo)
        
    }
    deleteTodoAction=(todo)=>{
        this.props.deleteTodos(todo)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {/* <button onClick={this.getDataTodo}>Click to Display Data</button>
                <button onClick={this.deleteTodoData}>Delete Todo</button>
                {this.props.todos && this.props.todos.map((todo)=>{
                    return <ul>
                        <li>User ID : {todo.userId}</li>
                        <li>ID : {todo.id}</li>
                        <li>Title: {todo.title}</li>
                        <li>Completed : {todo.completed ? "True" : "False"} </li>
                    </ul>
                })} */}
                <form >
                    <label htmlFor="fName">Enter First Name :</label><br />
                    <input type="text" name="fName" value={this.state.fName} onChange={(e)=>{this.changeTodo(e)}}/> <br />
                    <label htmlFor="lName">Enter Last Name :</label><br />
                    <input type="text" name="lName" value={this.state.lName} onChange={(e)=>{this.changeTodo(e)}}/> <br />
                    <button type='button' onClick={this.createTodo}> Submit</button>
                </form>
                { this.props.todos && this.props.todos.map((todo,i)=>{
                    return <p key={i}> {todo.lName} ,
                    <button onClick={()=>{this.deleteTodoAction(todo)}}>deleteTodo</button>
                    </p>
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

function mapDispatchtoProps(dispatch) {
    return {
        getTodos:()=>dispatch(getALLTodos()),
        deleteTodos:(todo)=>dispatch(deleteTodo(todo)),
        createTodos:(todo)=>dispatch(createTodoAction(todo))
    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(Todo)