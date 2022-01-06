import React, { Component } from 'react'
import { NormalComp3 } from './NormalComp3'
import PureComp3 from './PureComp3'

export default class ParentComp3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello from Normal component"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({message:"iam from parent component"})
        },1000)
    }
    
    render() {
        return (
            <div>
                <h2>Hellof from Parent comp3</h2>
                <NormalComp3 message={this.state.message}/>
                <PureComp3 message={this.state.message}/>
            </div>
        )
    }
}
