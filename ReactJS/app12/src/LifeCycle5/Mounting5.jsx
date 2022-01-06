import React, { Component } from 'react'
import UnMounting5 from './UnMounting5'
import Updating5 from './Updating5'

export default class Mounting5 extends Component {
    constructor(props) {
        super(props)
            console.log("iam from constructor Mounting")
        this.state = {
             count:0
        }
    }
    static getDerivedFromStateProps(props,state){
        console.log("iam from getDerivedFromStateProps",props,state)
        return null
    }
    componentDidMount(){
        console.log("iam from componentDidMount")
    }
    IncreaseCount=()=>{
        this.setState({count:this.state.count+1})
    }
    
    render() {
        console.log("iam from render mounting")
        return (
            <div>
                <button onClick={this.IncreaseCount}>IncreaseCount</button>
                <Updating5 count={this.state.count}/>
                {this.state.count<3 && <UnMounting5/>}
            </div>
        )
    }
}
