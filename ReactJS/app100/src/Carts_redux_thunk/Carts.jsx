import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllCartsAction } from './action'

 class Carts extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={()=>{this.props.getAllCartsFunc()}}>get Carts</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state)
    return{
        carts:state
    }
}
function dispatchStateToProps(dispatch) {
    return{
        getAllCartsFunc:()=>dispatch(getAllCartsAction())
    }
}
export default connect(mapStateToProps,dispatchStateToProps)(Carts)