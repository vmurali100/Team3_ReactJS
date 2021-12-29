import React,{Component} from 'react'

export const Sample1 = (Originalcom) => {
     class Newcomp extends Component {
         constructor(props) {
             super(props)
         
             this.state = {
                  count:0
             }
         }
         hadleCount=()=>{
             this.setState({count:this.state.count+1})
         }
        render() {
            return (
                <Originalcom count={this.state.count} hadleCount={this.hadleCount}/>
            )
        }
    }
    
    return Newcomp
}


