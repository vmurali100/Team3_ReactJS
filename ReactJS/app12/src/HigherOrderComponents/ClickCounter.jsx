import React, { Component } from 'react'
import { HocComp } from './HocComp'

 class ClickCounter extends Component {
  
    render() {
        // console.log(this.props)
        let{HandleCount,count}=this.props

        return (
            <div>
                <button onClick={HandleCount}>click it</button>
                <h1>count{count}</h1>
            </div>
        )
    }
}
export default HocComp(ClickCounter)
