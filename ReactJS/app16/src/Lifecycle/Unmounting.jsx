import React, { Component } from 'react'

export default class Unmounting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            //  message:"hi"
        }
    }
    componentWillUnmount(){
          alert("Deleting message")
    }
    render() {
        return (
            <div>
                
                <h2>{this.props.message}</h2>
            </div>
        )
    }
}
