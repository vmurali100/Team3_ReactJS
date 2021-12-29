import React, { Component } from 'react'
import Func from './Func'


export const Sample3 = (Mycomp) => {
      class NewComp extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 message:"hello",
                 count:1
                 
            }
        }
        handleClick=()=>{
            this.setState({message:"Hello from new message"})
        }
        handlecount=()=>{
            this.setState({count:this.state.count+2})
        }
        render() {
            return (
                <div>
                    <Mycomp message={this.state.message} count={this.state.count} handlecount={this.handlecount}
                     handleClick={this.handleClick} />
                </div>
            )
        }
    }
    
    return NewComp
}

