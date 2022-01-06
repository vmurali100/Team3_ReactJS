import React, { Component } from 'react'
import { Hocomp1 } from './Hocomp1'

 class ClickCount extends Component {
    
    render() {
        // console.log(this.props)
        let {HandleCount,count}=this.props
        return (
            <div>
                <button onClick={HandleCount}>click it</button>
                <h1>count:{count}</h1>
            </div>
        )
    }
}
export default Hocomp1(ClickCount)
