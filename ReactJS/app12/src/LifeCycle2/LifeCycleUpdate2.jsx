import React, { Component } from 'react'

export default class LifeCycleUpdate2 extends Component {
    constructor(props) {
        super(props)
        console.log("iam from life cycle constructor  upadate2")
        this.state = {
             
        }
    }
    static getDerivedFromStateFromProps(props,state){
        console.log("iam from getDerivedFromStateFromProps",props,state)
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
        return (
            <div>
                {this.props.message}
            </div>
        )
    }
}
