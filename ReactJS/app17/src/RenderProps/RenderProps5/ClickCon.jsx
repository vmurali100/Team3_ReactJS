import React, { Component } from 'react'
import ClickCounter from '../../HigherOrderComp5/ClickCounter'
import HoverCounter from '../../HigherOrderComp5/HoverCounter'
import Numbers from './Numbers'

export default class ClickCon extends Component {
    render() {
        return (
            <div>
                <Numbers render={()=><ClickCounter/>}/>
                <Numbers render={()=><HoverCounter/>}/>
            </div>
        )
    }
}
