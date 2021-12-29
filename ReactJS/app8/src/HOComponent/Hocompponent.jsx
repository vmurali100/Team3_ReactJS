import React, { Component } from 'react'

export const Hocompponent = (Mycomp) => {

   class Newcomp extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        handleCount=()=>{
            this.setState({count:this.state.count+1})
        }
        
        render() {
            return (

                <Mycomp count={this.state.count} handleCount={this.handleCount} />

            )
        }
    }

    return Newcomp
}



