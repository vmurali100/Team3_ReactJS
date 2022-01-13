import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getAllTodos } from './action2'
 class Todos extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            
       }
       console.log(this.props)
   }
   
    render() {
        return (
            <div>
                <button onClick={this.props.getAllTodosData()}>Click to display </button>
            </div>
        )
    }
}
function  mapStateTOProps(state) {
    // console.log(state)
    return{
        todos:state
    }
}
function mapDispatchtoProps(dispatch) {
    return {
        getAllTodosData:()=>dispatch(getAllTodos())
    }
}
export default connect(mapStateTOProps,mapDispatchtoProps)(Todos)