import React, { Component } from 'react'
import LifeCycleComponentB from './LifeCycleComponentB'

export default class LifeCycleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 1
        }
        console.log("iam from constructor")
    }
    static getDerivedFromProps(state, props) {
        console.log("iam from getDerivedFromProps", state, props)
        return null
    }
    changeCount = () => {
        this.setState({ count: this.state.count + 1 })
    }
    componentDidMount() {
        console.log("Iam from componentDidMount")
    }


    render() {

        console.log("iam from render")
        return (
            <div>
                <LifeCycleComponentB />

                <h2>React lifecyle component</h2>
                <button onClick={this.changeCount}>changeCount</button>
            </div>
        )
    }
}
