import React, { Component } from 'react'
import { NormalComp4 } from './NormalComp4'
import PureComp4 from './PureComp4'

export default class ParentComp4 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello from Normal component"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({message:"iam from parent component4"})
        },3000)
    }
    
    render() {
        return (
            <div>
                <h2>Hellof from parent component4</h2>
                <NormalComp4 message={this.state.message}/>
                <PureComp4 message={this.state.message}/>
            </div>
        )
    }
}
