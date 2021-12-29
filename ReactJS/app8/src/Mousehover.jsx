import React, { Component } from 'react'

export default class Mousehover extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    Handlecount=()=>{
        this.setState({count:this.state.count+1})
    }
    
    render() {
        return (
            <div>
                <h2 onMouseOver={this.Handlecount}>Count value is:{this.state.count}</h2>
            </div>
        )
    }
}
