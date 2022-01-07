import React, { Component } from 'react'
import { connect } from 'react-redux'

import { deleteProducts, getAllProducts } from './Actions/Action'
class Products extends Component {
    constructor(props) {
        super(props)

    }
    getproducts = () => {
        this.props.getUsersAction()
        // this.props.dispatch(getAllProducts())
    }
    deleteproducts = () => {
        this.props.deleteUserAction()
    }
    render(props) {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.getproducts}>Click to get data</button>
                <button onClick={this.deleteproducts}>Delete data</button>
                {this.props.products && this.props.products.map((product,i) => {
                    return <p key={i}>{product}</p>
                })}

            </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     this.props.dispatch(getAllProducts())
    // }
}
function mapStateToProps(state) {
    return {
        products: state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getUsersAction:()=> dispatch(getAllProducts()),
        deleteUserAction: (product) => dispatch(deleteProducts(product))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)