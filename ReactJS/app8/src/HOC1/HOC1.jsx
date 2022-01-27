import React,{Component} from 'react'

export const HOC1 = (Newcomp) => {
    class Mycom extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        handleCount(){
        this.setState({count:this.state.count+1})
        }
        
        render() {
            return <Newcomp count={this.state.count} handleCount={this.handleCount} />
        }
    }
    
    return Mycom
}



