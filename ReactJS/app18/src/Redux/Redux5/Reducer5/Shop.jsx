import React from 'react'
import { connect } from 'react-redux'

 const Shop = (props) => {
     console.log(props.shop)
    return (
        <div>
            {props.shop.shop.map((items)=>{
                return <li>{items}</li>
            })}
        </div>
    )
}
function stateToProps(state) {
    console.log(state)
    return {
        shop:state.shop
    }
}
export default connect(stateToProps)(Shop)