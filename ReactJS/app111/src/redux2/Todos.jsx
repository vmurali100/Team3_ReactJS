import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAlltodos } from './action2/action2'

 class Todos extends Component {
     showTodos=()=>{
         this.props.dispatch(getAlltodos())
     }
    render() {
        return (
            <div>
                <h2>Click on todos values</h2>
                <button onClick={this.showTodos}>todos</button>
                {this.props.todos.map((to,i)=>{
                    return <h4 key={i}>{to.id}<br/>{to.title}<br/>{to.completed}</h4>
                })}
            </div>
        )
    }
}
function stateToProps(state) {
    return{
        todos:state
    }
}
export default connect(stateToProps)(Todos)