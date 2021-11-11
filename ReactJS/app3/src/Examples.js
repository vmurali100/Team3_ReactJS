import { Component } from "react"

export  function Abc(){
    return <h2>Hello from functional component</h2>
}
<hr/>
export const Ramana=()=>{
    return <h2>Hello from Ramana component</h2>
}
<hr/>
export class Shiva extends  Component{
    render(){
    return <h2>Hello from Shiva component</h2>
}
}
<hr/>
export class Vinod extends Component{
    constructor(){
        super()
        this.state={
            information:"This is Vinod class component",
            person:{
                fname:"Vinod",
                lname:"kumar",
                mobile:"7815908010",
                city:"Kurnool"
            },
          Employees:["Ram","Shyam","Gopal","Teja"]
        }
    }
    render(){
        return(<div>
               <h2>Welcome to Class component </h2>
               <h3>{this.state.information}</h3>
               <ul>
                   <li>First Name:{this.state.person.fname}</li>
                   <li>Last Name:{this.state.person.lname}</li>
                   <li>Mobile:{this.state.person.mobile}</li>
                   <li>City:{this.state.person.city}</li>
               </ul>
               <hr/>
               <ul>
                   {this.state.Employees.map((Employees)=>{
                      return<li>{Employees}</li>
                   })}
               </ul>
        </div>)
    }
}