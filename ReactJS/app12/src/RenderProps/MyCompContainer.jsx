import React from 'react'
import Clickcounter4 from '../HigherOrderCompnent4/Clickcounter4'
import HoverCompo4 from '../HigherOrderCompnent4/HoverCompo4'
import { MyComponent } from './MyComponent'

export const MyCompContainer = () => {
    const returnClickCounter = () => {
        return <Clickcounter4 />
    }
    const returnHoverCompo = () => {
        return <HoverCompo4 />
    }
    return (
        <div>
            {/* <MyComponent render={returnClickCounter}/>
            <MyComponent render={returnHoverCompo}/> */}

            <MyComponent  render={() => <Clickcounter4 />} />
            <MyComponent render={() => <HoverCompo4 />} />



        </div>
    )
}
