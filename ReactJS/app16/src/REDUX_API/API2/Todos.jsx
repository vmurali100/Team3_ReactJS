import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Todos extends Component {
    render() {
        return (
            <div>
                lokesh
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
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todos)

