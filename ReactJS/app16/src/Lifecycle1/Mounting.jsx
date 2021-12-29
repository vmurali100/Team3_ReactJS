import React, { Component } from 'react'
import Update from './Updating'
import Unmounting from './Unmounting'
export class Mounting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0
        }
        console.log("I'm from Constructor")
    }
    static getDerivedStateFromProps(state,props){
        console.log("Hello from getDerivedStateFromProps",state,props)
        return null
    }
    componentDidMount(){
        console.log("Hello from componentDidMount")
    }
    add=()=>{
        this.setState({count:this.state.count+1})
        
    }
    render() {
        console.log("Hello from render")
        return (
            <div>
              <button onClick={this.add}>Add</button>
                <Update count={this.state.count}/>
                {this.state.count < 3 && <Unmounting/>}
               
            </div>
        )
    }
}

export default Mounting
