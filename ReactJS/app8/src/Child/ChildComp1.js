import React, { Component } from 'react'

export default class ChildComp1 extends Component {
    constructor(props){
        super(props)

        this.state={
            user:["lokesh","Hareesh","Dilip","Chandu","Somu"]
        }
    }
    render() {
        return (
            <div>
                <button onClick={()=>{this.props.sendData(this.state.user)}}>get data</button>
            </div>
        )
    }
}
