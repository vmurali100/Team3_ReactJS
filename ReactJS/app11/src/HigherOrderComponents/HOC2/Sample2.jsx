import React,{Component} from 'react'

export const Sample2 = (Mycomp) => {
    class Newcomp extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 message:'hello am first message'
            }
        }
        handleClick=()=>{
            this.setState({message:"Hello from second message"})
        }
        render() {
            return (
            <Mycomp message={this.state.message} handleClick={this.handleClick} />
            )
        }

    }
    
    return Newcomp
}

 