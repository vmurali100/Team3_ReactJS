import React from 'react'
import Clickcounter4 from '../HigherOrderCompnent4/Clickcounter4'
import HoverCompo4 from '../HigherOrderCompnent4/HoverCompo4'
import { MyComponent1 } from './MyComponent1'

export const MyCompContainer1 = () => {
    const returnClickCopunter=()=>{
        return <Clickcounter4/>
    }
    const returnHoverCompo=()=>{
        return <HoverCompo4/>
    }
    return (
        <div>
            <MyComponent1 render={returnClickCopunter}/>
            <MyComponent1 render={returnHoverCompo}/>

            {/* <MyComponent1 render={()=><Clickcounter4/>}/> */}
            {/* <MyComponent1 render={()=><HoverCompo4/>}/> */}
        </div>
    )
}
