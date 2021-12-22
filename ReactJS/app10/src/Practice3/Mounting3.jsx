import React, { Component } from 'react'

export default class Mounting3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users:["Chandu","hari","lokesh","abi"]
            
        }
        console.log("Hello from constructor 3")
    }
    static getDerivedStateFromProps(props,state){
     console.log("Hello from getDerivedStateFromProps 3",props,state)
     return null
    }
    componentDidMount(){
        console.log("componentDidMount from component3")
    }
    render() {
        console.log("Hello from render")
        return (
            <div>
                <ul>{this.state.users.map((aa)=>{
                   return<li>{aa}</li>
                })}</ul>
            </div>
        )
    }
}
