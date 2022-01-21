import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllProductsAction } from './action'

class Products extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={() => { this.props.getAllProducts() }}>get product</button>
            </div>
        )
    }
}
const mapStateTOProps =(state)=>{
    return {
        products: state
    }
}

const mapDispatchToProps=(dispatch)=> {
    return {
        getAllProducts: () => dispatch(getAllProductsAction())
    }
}
export default connect(mapStateTOProps, mapDispatchToProps)(Products)