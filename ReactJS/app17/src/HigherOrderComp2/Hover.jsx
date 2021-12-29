import React from 'react'
import { Parent } from './Parent'

 const Hover = (props) => {
    return (
        <div>
              
                <img style={{ height: "200px", width: "200px" }} onMouseOver={props.handleHover} src={props.url} alt="nature" />
                <br />
                <br />
                {/* <button >Click to view</button> */}
            
        </div>
    )
}
export default React.memo(Parent(Hover))