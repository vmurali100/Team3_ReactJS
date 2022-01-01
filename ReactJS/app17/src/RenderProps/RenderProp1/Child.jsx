import React from 'react'

   const Child = (props) => {
       console.log(props)
    return (
        <div>
            {props.render()}
        </div>
    )
}
export default Child