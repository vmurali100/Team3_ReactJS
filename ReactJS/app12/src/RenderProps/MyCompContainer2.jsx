import React from 'react'
import Clickcounter4 from '../HigherOrderCompnent4/Clickcounter4'
import  LifeCycleMounting from '../LifeCycle1/LifeCycleMounting'
import { MyComponent2 } from './MyComponent2'

export const MyCompContainer2 = () => {
    const returnClickCounter4 = () => {
        return <Clickcounter4 />
    }
    const returnLifeCycleMounting = () => {
        return <LifeCycleMounting />
    }
    return (
        <div>
            <MyComponent2 render={returnClickCounter4} />
            <MyComponent2 render={returnLifeCycleMounting} />

        </div>
    )
}
