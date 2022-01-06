import React from 'react'
import { HoComp2 } from './HoComp2'

const HoverCompo2 = (props) => {
    return (
        <div>
            <img style={{height:"50%", width:"25%"}}  onMouseOver={props.HandleHover} src={props.imgurl} />
        </div>
    )
}
export default React.memo(HoComp2(HoverCompo2))