import React from 'react'
import { ParentComp } from './ParentComp'

 const Array1 = (props) => {
    return (
        <div>
                {props.user.map((ur)=>{
                    return <h2>{ur}</h2>
                })}
        </div>
    )
}
export default React.memo(ParentComp(Array1))
