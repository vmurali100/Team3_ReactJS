import React, { Component } from 'react'
import { connect } from 'react-redux'

class Products extends Component {
    render(props) {
        console.log(this.props)
        return (
            <div>
                {this.props.products.map((pro,i)=>{
                    return <p key={i}>{pro}</p>
                })}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        products:state.products
    }
}
export default connect(mapStateToProps)(Products)