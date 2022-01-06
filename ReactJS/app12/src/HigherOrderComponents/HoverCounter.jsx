import React, { Component } from 'react'
import { HocComp } from './HocComp'

 class HoverCounter extends Component {

    render() {
        console.log(this.props)
        let {HandleCount,count}=this.props

        return (
            <div>
                <h1 onMouseOver={HandleCount}>mousehover:{count}</h1>
            </div>
        )
    }
}
export default HocComp(HoverCounter)
