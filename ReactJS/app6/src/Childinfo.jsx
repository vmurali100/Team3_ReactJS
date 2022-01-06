import React, { Component } from 'react'

export default class Childinfo extends Component {
    constructor(props){
        super(props)

        this.state={
            users:["lokesh","hareesh", "chandu","abi"]
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={()=>{this.props.recieveData(this.state.users)}}>send users</button>
            </div>
        )
    }
}
