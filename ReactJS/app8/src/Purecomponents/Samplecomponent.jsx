import React, { Component } from 'react'
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
            this.setState({message:"Charan Kumar   "})
        }, 2000);
    }
    
    render() {
        return (
            <div>
                {/* <h2>My name is{message}</h2> */}
                <Samplechild message={this.state.message}/>
            </div>
        )
    }
}
