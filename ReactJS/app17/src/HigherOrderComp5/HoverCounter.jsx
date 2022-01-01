import React ,{PureComponent}from 'react'
import { CompContainer } from './CompContainer'


 class HoverCounter extends PureComponent {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     
    render() {
        return (
            <div>
                <h3> Count : {this.props.count}</h3>
                <p>Hover to Add Count and remove cursor from button to stop count</p>
                  <button onMouseOver={this.props.startCount} onMouseOut={this.props.stopCount} > Add   </button>
                {/* <button onMouseOver={this.props.stopCount}>Stop</button> */}
            </div>
        )
    }
}

export default CompContainer(HoverCounter)