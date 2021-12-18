import React, { Component ,useState} from 'react'

export default class ChildComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:["Murali","Harish","Abi","Chandu","Lokesh"]
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={()=>{this.props.receieData(this.state.users)}}>Send Users</button>
            </div>
        )
    }
}
