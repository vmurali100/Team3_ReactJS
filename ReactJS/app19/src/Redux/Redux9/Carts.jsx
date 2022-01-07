import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllCarts } from './Action9'




class Carts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    getCarts =()=>{
        console.log(this.props)
         return this.props.dispatch(getAllCarts())

    }
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.getCarts }>Click </button>
                {this.props.carts && this.props.carts.map((cart)=>{
                    return <ul>
                        <li>Id : {cart.id}</li>
                        <li>UserId : {cart.userId}</li>
                        <li>Date: {cart.date}</li>
                        <li>Products: {cart.products.productId}</li>
                    </ul>
                })}
            </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     return this.props.dispatch(getAllUserStore())
    // }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        carts:state
    }
}

export default connect(mapStateToProps)(Carts)