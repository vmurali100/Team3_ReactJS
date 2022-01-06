import React from 'react'
import { MyComponent3 } from './MyComponent3'
import ClickCounter4 from '../HigherOrderCompnent4/Clickcounter4'
import HoverCompo4 from '../HigherOrderCompnent4/HoverCompo4'
import LifeCycleMounting from '../LifeCycle1/LifeCycleMounting'

export const MyCompContainer3 = () => {
    return (
        <div>
            <MyComponent3 render={()=><ClickCounter4/>}/>
            <MyComponent3 render={()=><HoverCompo4/>}/>
            <MyComponent3 render={()=><LifeCycleMounting/>}/>
        </div>
    )
}
