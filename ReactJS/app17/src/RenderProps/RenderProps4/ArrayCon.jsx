import React, { Component } from 'react'
import Array from '../../HigherOrderComp4/Array'
import Array2 from '../../HigherOrderComp4/Array2'
import ArrayEle from './ArrayEle'

export default class ArrayCon extends Component {
    render() {
        return (
            <div>
                <ArrayEle render={()=><Array/>}/>
                <ArrayEle render={()=><Array2/>}/>   
            </div>
        )
    }
}
