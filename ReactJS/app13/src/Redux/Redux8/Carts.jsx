import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getAllCartsAction } from './action8'

class Carts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log(this.props)
    }
    
    
    render() {

        return (
            <div>
                <button onClick={()=>{this.props.getAllCarts()}}>Click</button>
             </div>
        )
    }
}
function mapStateToprops(state) {
    console.log(state)
    return {
        carts:state
    }
}
function mapDispatchtoProps(dispatch) {
    
    return {
        getAllCarts:()=>dispatch(getAllCartsAction())
    }
}
export default connect(mapStateToprops,mapDispatchtoProps)(Carts)