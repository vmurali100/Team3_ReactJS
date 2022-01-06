import React, { Component } from 'react'

export default class Updating extends Component {
    constructor(props) {
        super(props)
    console.log("iam from updating constructor")
        this.state = {
             
        }
    }
    static getDerivedFromStateProps(props,state){
        console.log("iam from getDerivedFromStateProps update",props,state)
        return null
    }
    shouldComponentUpdate(){
        console.log("iam from shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("iam from getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("iam from componentDidUpdate")
    }
    
    render() {
        console.log("iam from updating render")
        return (
            <div>
                {this.props.count}
            </div>
        )
    }
}
