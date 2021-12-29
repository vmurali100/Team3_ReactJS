import React, { Component } from 'react'

export default class Clickhandle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    HandleCount=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <div>
                <button onClick={this.HandleCount}>Count value is:{this.state.count}</button>
            
            </div>
        )
    }
}
