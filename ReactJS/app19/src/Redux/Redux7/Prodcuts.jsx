import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllProducts } from './Action'


class Prodcuts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    getProducts=()=>{
        console.log(this.props)
         return this.props.dispatch(getAllProducts())

    }
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.getProducts}>Click </button>
                {this.props.products && this.props.products.map((product)=>{
                    return <ul>
                        <li>ID : {product.id}</li>
                        <li>Description : {product.description}</li>
                        <li>Title: {product.title}</li>
                        <li><img src={product.image} style={{height : "100px" ,width : "100px"}} alt="" /></li>
                        <li>Rating: {product.rating.rate}</li>
                    </ul>
                })}
            </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     return this.props.dispatch(getAllProducts())
    // }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        products:state
    }
}

export default connect(mapStateToProps)(Prodcuts)