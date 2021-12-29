import React from 'react'
import Click from '../HOComponent/Click'
import Hover from '../HOComponent/Hover'
import { Subcomp } from './Subcomp'

export const Maincomp = () => {
    const returnHover=()=>{
        return <Hover/>
    }
    const returnClick=()=>{
        return <Click/>
    }
    return (
        <div>
            <Subcomp render={returnHover}/>
            <Subcomp render={returnClick}/>
        </div>
    )
}
export default Maincomp