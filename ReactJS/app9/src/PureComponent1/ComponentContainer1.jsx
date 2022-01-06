import React, { Component } from 'react'
import { NormalComponent1 } from './NormalComponent1'
import PureComp from './PureComp'

export default class ComponentContainer1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello from Normal component"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({message:"iam changing message for every two seconds"})
        },2000)
    }
    
    render() {
        return (
            <div>
                <p>Hellof from container component</p>
                <NormalComponent1 message={this.state.message}/>
                <PureComp message={this.state.message}/>
            </div>
        )
    }
}
