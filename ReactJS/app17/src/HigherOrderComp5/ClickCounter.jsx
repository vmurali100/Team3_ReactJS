import React, {  PureComponent } from 'react'
import { CompContainer } from './CompContainer'

 class ClickCounter extends PureComponent {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0,
            
    //     }
        
    //      this.startCount=()=>{
    //         this.increseCount = setInterval(()=>{
    //            this.setState({count:this.state.count+1})
    //        }, 1000);
    //        }
    //       this.stopCount=()=>{
    //         clearInterval(this.increseCount)
    //      }
    // }
    
      
    
    render() {
        return (
            <div>
                <h3>Count : {this.props.count}</h3>
                <button onClick={this.props.startCount}>ADD</button>
                <button onClick={this.props.stopCount}>Stop</button>
                <br />
                <br />
               
            </div>
        )
    }
}
export default CompContainer(ClickCounter)
// export default ClickCounter