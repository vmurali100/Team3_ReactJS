import React, { Component } from "react"
export  default class Sample extends Component{
    constructor(){
        super()
        this.state={
            content:"Person Details 1",
            person:{
                fName:"Abhi",
                lName:"Rami",
                age:"24"
            },
            personNames:["Abi","Aishu","Moni"]
        }
    }
    render(){
        return <div>
            <h2>{this.state.content}</h2>

            <ul>
                <li>Person First Name:{this.state.person.fName}</li>
                <li>Person Last Name:{this.state.person.lName}</li>
            </ul>
            <ul>
                {this.state.personNames.map((names)=>{
                    return <li>{names}</li>
                })}
            </ul>
        </div>
    }
}
export class Sample2 extends Component{
    constructor(){
        super()
        this.state={
            message:"Person Details 2",
            person2:{
                fName:"Moni",
                lName:"K",
                age:"25"
            },
            persons:["Moni","Priya"]
        }
    }
    render(){
        return <div>
            <h3>{this.state.message}</h3>

            <ul>
                <li>Person First Name:{this.state.person2.fName}</li>
                <li>Person Last Name:{this.state.person2.lName}</li>
            </ul>

            <ul>
                {this.state.persons.map((val)=>{
                    return <li>{val}</li>
                })}
            </ul>
        </div>
    }
}

export class Sample3 extends Component{
    constructor(){
        super()
        this.state={
            message:"Person Details 3",
            person3:{
                fName:"Abirami",
                lName:"M",
                age:"25"
            },
            person:["AAAA","BBBB"]
        }
    }
    render(){
        return <div>
            <h3>{this.state.message}</h3>

            <ul>
                <li>Person First Name:{this.state.person3.fName}</li>
                <li>Person Last Name:{this.state.person3.lName}</li>
            </ul>

            <ul>
                {this.state.person.map((parameters)=>{
                    return <li>{parameters}</li>
                })}
            </ul>
        </div>
    }
}
export class Sample4 extends Component{
    constructor(){
        super()
        this.state={
            message:"Person Details 4",
            person4:{
                fName:"Aaa",
                lName:"h",
                age:"25"
            },
            arrayElements:["ZZZ","MMM"]
        }
    }
    render(){
        return <div>
            <h3>{this.state.message}</h3>
            

            <ul>
                <li>Person First Name:{this.state.person4.fName}</li>
                <li>Person Last Name:{this.state.person4.lName}</li>
            </ul>

            <ul>
                {this.state.arrayElements.map((argument)=>{
                    return <li>{argument}</li>
                })}
            </ul>
        </div>
    }
}