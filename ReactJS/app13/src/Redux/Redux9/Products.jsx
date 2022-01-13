import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getAllProducts } from './action9'

class Products extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log(this.props)
    }
    
    
    render() {

        return (
            <div>
                <button onClick={()=>{this.props.getAllProducts()}}>Click</button>
             </div>
        )
    }
}
function mapStateToprops(state) {
    console.log(state)
    return {
        products:state
    }
}
function mapDispatchtoProps(dispatch) {
    
    return {
        getAllProducts:()=>dispatch(getAllProducts())
    }
}
export default connect(mapStateToprops,mapDispatchtoProps)(Products)