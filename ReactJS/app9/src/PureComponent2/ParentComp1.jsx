import React, { Component } from 'react'
import { NormalComponent2 } from './NormalComponent2'
import PureComp1 from './PureComp1'

export default class ParentComp1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello from Normal component"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({message:"iam from parent component"})
        },2000)
    }
    
    render() {
        return (
            <div>
                <p>Hellof from parent component</p>
                <NormalComponent2 message={this.state.message}/>
                <PureComp1 message={this.state.message}/>
            </div>
        )
    }
}
