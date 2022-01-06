import React, { Component } from 'react'
import { HoCompo4 } from './HoCompo4'

class Clickcounter4 extends Component {
    render() {
        let { HandleCount, count} = this.props
        return (
            <div>
                <button onClick={HandleCount}>click it</button>
                <h1>count:{count}</h1>
                {/* <p>{someInfo}</p> */}
            </div>
        )
    }
}
export default HoCompo4(Clickcounter4)