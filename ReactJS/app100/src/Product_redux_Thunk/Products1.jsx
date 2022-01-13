import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllProductsAction } from './action'

 class Products1 extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={()=>{this.props.getAllProductsFunc()}}>get products</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        products:state
    }
}
function dispatchStateToProps(dispatch) {
    return{
        getAllProductsFunc:()=>dispatch(getAllProductsAction())
    }
    
}
export default connect(mapStateToProps,dispatchStateToProps)(Products1)
