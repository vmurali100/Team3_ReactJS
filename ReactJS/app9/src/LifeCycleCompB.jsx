import React, { Component } from 'react'

export default class LifeCycleComB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'hello'
        }
        console.log('hello from constructor')
    }
     ChangeMessage=()=>{
         console.log("hello new component")
      this.setState({message:this.state.message})
    }
static getDerivedStateFromProps(props,state){
    console.log("Hello from getDerivedStateFromProps")
    return({message:props.newMessage})

}
componentDidMount() {
    
      this.setState({message: "Comonent did mount component"})
    
    console.log("Comonent did mount component")
  }



    render() {
        
       
        console.log("hello from render")
        return (
            <div>
          <h1>{this.state.message}</h1>
                <h2>Life CycleB</h2>
<button type="button" onClick={this.ChangeMessage}>Click  </button>

            </div>
        )
    }
}
