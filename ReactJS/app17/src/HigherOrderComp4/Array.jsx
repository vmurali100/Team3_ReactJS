import React, {  PureComponent } from 'react'
import { ParentContainer } from './ParentContainer'

class Array extends PureComponent {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          names:["Abhi","Moni","Abirami"]
    //     }
    // }
    
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.name.map((val)=>{
                    return <li>{val}</li>
                })}
            </div>
        )
    }
}
export default ParentContainer(Array)