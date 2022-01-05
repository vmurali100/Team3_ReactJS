import { connect } from 'react-redux'
import React from 'react'
const Objects = (props) => {
    console.log(props.obj)
    return (
        <div>
            {props.obj.obj.map((pro) => {
                return <li>{pro}</li>
            })}
        </div>
    )
}
function statetoProps(state) {
    return {
        obj: state.obj
    }
}
export default connect(statetoProps)(Objects)