import React, { Component } from 'react'

export default class Unmounting2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            //  message:"hi"
        }
    }
    componentWillUnmount(){
          prompt("delete")
    }
    render() {
        return (
            <div>
                
                <h2>{this.props.message}</h2>
            </div>
        )
    }
}
