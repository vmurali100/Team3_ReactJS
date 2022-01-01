import React from 'react'
import Object1 from '../../HigherOrderComp3/Object1'
import Object2 from '../../HigherOrderComp3/Object2'
import { Result } from './Result'

export const ObjContainer = () => {
    return (
        <div>
            <Result render={()=><Object1/>}/>
            <Result render={()=><Object2/>}/>
        </div>
    )
}
