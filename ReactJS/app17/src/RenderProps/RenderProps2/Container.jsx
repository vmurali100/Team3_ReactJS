import React from 'react'
import Hover from '../../HigherOrderComp2/Hover'
import Image from '../../HigherOrderComp2/Image'
import { Images } from './Images'

export const Container = () => {
    return (
        <div>
            <Images render={()=><Image/>}/>
            <Images render={()=><Hover/>}/>
        </div>
    )
}
