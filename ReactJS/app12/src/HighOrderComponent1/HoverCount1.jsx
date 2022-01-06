import React, { Component } from 'react'
import { Hocomp1 } from './Hocomp1'

 class HoverCount1 extends Component {
    render() {
        // console.log(this.props)
        let {HandleCount,count}=this.props
        return (
            <div>
                <h1 onMouseOver={HandleCount} >mousehover:{count}</h1>
            </div>
        )
    }
}
export default Hocomp1(HoverCount1)
