import React, { Component } from 'react'
import UnMounting4 from './UnMounting4'
import Updating4 from './Updating4'

export default class Mounting4 extends Component {
    constructor(props) {
        super(props)
        console.log("iam from Mounting constructor")
        this.state = {
            count: 0
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log("Hello from getDerivedStateFromProps mount", props, state)
        return null
    }
    componentDidMount() {
        console.log("hello from componentDidMount")
    }
    IncreaseCount = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        console.log("iam from Mounting render")
        return (
            <div>
                <button onClick={this.IncreaseCount}>IncreaseCount</button>
                <Updating4 count={this.state.count}/>
                {this.state.count <2 && <UnMounting4/>}
            </div>
        )
    }
}
