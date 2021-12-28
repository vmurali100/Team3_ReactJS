import React, { Component } from 'react'
import Purecomp from './Purecomp';
import { Samplechild } from './Samplechild'

export default class Samplecomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'chandu',
             count:1
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({count:this.state.count+1})
        }, 2000);
    }
    
    render() {
        console.log("HELLO FROM PARANT render COMPONENT")
        return (
            <div>
                {/* <h2>My name is{message}</h2> */}
                <h1>Hello from parent component</h1>
                <Samplechild message={this.state.message}/>
                <Purecomp count={this.state.message}/>
            </div>
        )
    }
}
