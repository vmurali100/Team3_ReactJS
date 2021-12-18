import React, { Component } from 'react'

export default class LifecycleComA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: '0'
        }
        console.log('hello from constructor')
    }
     ChangeMessage=()=>{
         console.log("hello new component")
      this.setState({count:this.state.count+1})
    }
static getDerviedStateFromProps(props,state){
    console.log("Hello from getDerviedStateFromProps " ,props,state)
    
}




    render() {
        return (
            <div>

                <h2>render component</h2>
<button type="button" onClick={this.ChangeMessage}>Click  </button>
            </div>
        )
    }
}
