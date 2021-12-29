import React, { PureComponent } from 'react'
import { ContainerComp } from './ContainerComp'

 class Count extends PureComponent {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0,
    //          greetings:"Welcome to Class Component"
    //     }
    // }
    // handleCount=()=>{
    //     this.setState({count: this.state.count + 1})
    // }
    // handlegreeting=()=>{
    //     this.setState({greetings:"Greetings Changed"})
    // }
    render() {
        return (
            <div>
                <h2>
                    Count : {this.props.count} 
                </h2>
                {/* <h2>{this.props.greetings}</h2> */}
                <button onClick={this.props.handleCount} >Click to add count</button>
            </div>
        )
    }
}
export default ContainerComp(Count)
