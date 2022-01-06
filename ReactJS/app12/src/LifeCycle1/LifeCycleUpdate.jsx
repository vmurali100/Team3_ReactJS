import React, { Component } from 'react'

export default class LifeCycleUpdate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    static getDerivedFromStateFromProps(props,state){
        console.log("iam from update getDerivedFromStateFromProps",props,state)
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
        console.log("iam from update render")
        return (
            <div>
                
                <h2>{this.props.count}</h2>
            </div>
        )
    }
}
