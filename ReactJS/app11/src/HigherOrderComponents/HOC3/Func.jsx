import React from 'react'
import { Sample3 } from './Sample3'

 const Func = (props) => {

    return (
        <div>
            <h2>message from parent:{props.message}</h2>
            <button onClick={props.handleClick}>Change</button>
        </div>
    )
}
export default  React.memo(Sample3(Func))