import React, { useState } from 'react'

const Child2 = (props) => {
    const [state, setstate] = useState(["Lenovo", "asus", "realme", "redmi", "oneplus"])
    function mobiles() {
        props.recivedMobiles(state)
    }

    return (
        <div>
            {/* <button onClick={()=>{props.recivedMobiles(state)}}>click mobiles</button> */}
            <button onClick={mobiles}>click 2</button>
            <hr />
        </div>
    )
}
export default Child2
