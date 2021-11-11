import React, { Component } from "react"
// import { Acomp } from "./Functioncom"
export class Abirami extends Component{
    constructor(){
        super()
        this.state={
            greeting:"Welcome to app9",
            person:{
                fName:"Abhirami",
                lName:"M",
                age:24,
                phoneNo:9876543
            },
            Details:["B.E","12/12/1997","female"]
        }
    }
    render(){
        return <div>
            
            <h2>{this.state.greeting}</h2>
            <button onClick={()=>{this.setState({greeting:"changing greeting"})}}>Click </button>
            <ul>
                <li>Person Name:{this.state.person.fName+" " +this.state.person.lName}</li>
                <button onClick={()=>{this.setState({person:{
                    fName:"Aishu",
                    lName:"A"
                }})}}>enter</button>
            </ul>
            <ul>
                {this.state.Details.map((para)=>{
                    return <li>{para}</li>
                })}
                <button onClick={()=>{this.setState({Details:["abi@gmail.com"]})}}>submit</button>
            </ul>
            {/* <Acomp personInfo={this.state.person}/> */}
        </div>
    }
}
export class Abhi extends Component{
    constructor(){
        super()
        this.state={
            message:"App 9",
            student:{
                fName:"Abhi",
                lName:"M",
                email:"abc@gmail.com"
            },
            colorName:["violet","pink","sandal","red","blue"]
        }
    }
    render(){
        return <div>
            
            <h2>{this.state.message}</h2>
            <button onClick={()=>{this.setState({message:"Welcome to this page"})}}>Submit </button>
            <ul>
                <li>Person Name:{this.state.student.fName}</li>
                <li>Person Email:{this.state.student.email}</li>
                <button onClick={()=>{this.setState({student:{
                    fName:"Aishu",
                    email:"xyx@gmail.com"
                }})}}>enter</button>
            </ul>
           
            <ul>
            {this.state.colorName.map((val)=>{
                return <li> {val}</li>
            })}
            <button onClick={()=>{this.setState({colorName:["Skyblue","black"]})}}>submit</button>
            </ul>
        </div>

    }
}
export class ClassAbi extends Component{
    constructor(){
        super()
        this.state={
            content:"Im from app9",
            car:{
                name:"swift",
                price:"8 lac",
                model:"ASD11",
                
            },
            carInfo:["bluetooth","power sterring"]
        }
    }
    render(){
        return <div>
            
            <h2>{this.state.content}</h2>
            <button onClick={()=>{this.setState({content:"Car component"})}}>Click Me</button>
            <ul>
                <li> car price:{this.state.car.price}</li>
                
                <li>car model:{this.state.car.model}</li>
                <button onClick={()=>{this.setState({car:{
                    price:"12 lac",
                    model:"1234"
                }})}}>enter</button>
            </ul>
            <ul>
            {this.state.carInfo.map((argument)=>{
                return <li> {argument}</li>
            })}
            <button onClick={()=>{this.setState({carInfo:["sun roof"]})}}>submit</button>
            </ul>
        </div>
    }
}
export class Employee extends Component{
    constructor(){
        super()
        this.state={
            greetings:"Welcome",
            EmpDetails:{
                fName:"AAAA",
                lName:"A",
                phoneNo:91923456,
                id:"001"
            },
            EmployeerDetails:["AAA","BBB","CCCc","DDDd"]
        }
    }
    render(){
        return <div>
            
            <h2>{this.state.greetings}</h2>
            <button onClick={()=>{this.setState({greetings:"Hello from Employee"})}}>click here</button>
            <ul>
                <li>Employee Name:{this.state.EmpDetails.fName}</li>
               
                <li>Employee Id:{this.state.EmpDetails.id}</li>
                <button onClick={()=>{this.setState({EmpDetails:{
                    fName:"priya",
                    id:"111"
                }})}}>enter</button>
            </ul>
            <ul>
            {this.state.EmployeerDetails.map((parameter)=>{
                return <li> {parameter}</li>
            })}
            <button onClick={()=>{this.setState({EmployeerDetails:["address","company name"]})}}>submit</button>
            </ul>
            
        </div>
    }
}
export class Last extends Component{
    constructor(){
        super()
        this.state={
            display:"This is last comp",
            studentData:{
                fName:"Aishu",
                lName:"B",
                age:24,
               
            },
            biodata:["B.E","female"]
        }
    }
    render(){
        return <div>
            
            <h2>{this.state.display}</h2>
            <button onClick={()=>{this.setState({display:"changing greeting"})}}>button</button>
            <ul>
                <li>Person Name:{this.state.studentData.fName}</li>
                <button onClick={()=>{this.setState({studentData:{
                    fName:"abhi"
                }})}}>enter</button>
            </ul>
            <ul>
            {this.state.biodata.map((values)=>{
                return <li> {values}</li>
            })}
            <button onClick={()=>{this.setState({biodata:["abhi@gamil.com","987542"]})}}>submit</button>
            
            </ul>

        </div>
    }
}