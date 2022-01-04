import React from 'react'
import { connect } from 'react-redux'

 const Objects = (props) => {
     console.log(props)
    return (
        <div>
            {props.objects.map((pro)=>{
                return <li>{pro}</li>
            })}
        </div>
    )
}
function statetoProps(state) {
    return {
        objects:state.objects
    }
}
export default connect(statetoProps)(Objects)