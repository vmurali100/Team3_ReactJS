import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Products extends Component {
    render() {
        return (
            <div>
                {this.props.Products.map((pd,i)=>{
                    return <p key={i}>{pd}</p>
                })}
            </div>
        )
    }
}
function mapProductsProps(state){
    console.log(state)
    return(
        {Products:state.Products}
    )
}
export default connect(mapProductsProps)(Products)