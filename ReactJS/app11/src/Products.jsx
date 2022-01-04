import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Products extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                {this.props.products.map((prdt)=>{
                    return <h3 key={prdt}>{prdt}</h3>
                })}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return(
        {products:state.products}
    )
}
export default connect(mapStateToProps)(Products)