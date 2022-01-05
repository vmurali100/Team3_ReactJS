import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllProducts } from './Actions/Action'
class Products extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    getproducts=()=>{
        return  this.props.dispatch(getAllProducts())
    }
    render(props) {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.getproducts}>Click to get data</button>
                {this.props.products && this.props.products.map((pro,i)=>{
                    return <p key={i}>{pro}</p>
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
        products:state
    }
}
export default connect(mapStateToProps)(Products)