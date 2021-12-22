import React, { Component } from 'react'

export default class UpdatingChild extends Component {
    constructor(props) {
        super(props)
        console.log("Helo from constructor from Child")
        this.state = {
             
        }
    }
    shouldComponentUpdate(){
        console.log("Hello from shouldComponentUpdate from chaild component")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("hello from getSnapshotBeforeUpdate from child component")
        return null
    }
    componentDidUpdate(){
        console.log("hello from componentDidUpdate from child component ")
    }
    render() {
        return (
            <div>
                <h2>{this.props.count}</h2>
            </div>
        )
    }
}
