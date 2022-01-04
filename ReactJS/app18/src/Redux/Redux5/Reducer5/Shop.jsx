import React from 'react'
import { connect } from 'react-redux'

 const Shop = (props) => {
     console.log(props)
    return (
        <div>
            {props.shop.map((items)=>{
                return <li>{items}</li>
            })}
        </div>
    )
}
function stateToProps(state) {
    return {
        shop:state.shop
    }
}
export default connect(stateToProps)(Shop)