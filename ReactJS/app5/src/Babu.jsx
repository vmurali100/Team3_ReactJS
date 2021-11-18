import React, { Component } from 'react'

export default class Babu extends Component {
    constructor(props){
        super(props)
        this.state={
            Msg:"Hello from Class component",
            uesr:{
                fname:"Charan",
                lname:"kumar"
                
            },
            sudents:[{fname:"AA",lname:"BB"},{fname:"CC",lname:"DD"}],
            Emps:["asd","sdf","hhg"]
        }
    }
    render() {
        return (
            <div>
                <button onClick={(()=>{this.props.recieveEmp(this.state.Emps)})}>ShowMsg</button>
            </div>
        )
    }
}
