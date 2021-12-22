import React, { Component } from 'react'
import UnMount from './UnMount'
import PracticeChild1 from './UpdatingChild'

export default class Updating extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0  
                   }
                console.log("Hello from Parant constructor")
    }
  static getDerivedStateFromProps(props,state){
      console.log("Hello from getDerivedStateFromProps",props,state)
      return null
  }

    IncreaseCount=()=>{
    this.setState({count:this.state.count+1})
    }
    render() {
        
        return (
            <div>
                
                <button onClick={this.IncreaseCount}>Increase count</button>
                <PracticeChild1 count={this.state.count}/>
                {this.state.count <= 3 && <UnMount/>}
            </div>
        )
    }
}
