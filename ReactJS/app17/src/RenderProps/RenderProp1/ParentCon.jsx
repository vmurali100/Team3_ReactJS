import React from 'react'
import Count from '../../HigherOrderComp/Count'
import Message from '../../HigherOrderComp/Message'
import Child from './Child'


export const ParentCon = () => {
    return (
        <div>
            <Child render={()=><Count/>}/>
            <Child render={()=><Message/>}/>
        </div>
    )
}

