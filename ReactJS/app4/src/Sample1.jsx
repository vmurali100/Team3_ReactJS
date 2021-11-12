import { Component } from "react";

export default class Mani extends Component{
    constructor(){
        super()
        this.state={
            message:"Hello from mani component",
            persons:{
                name:"Charan",
                city:"Tirupati",
                sal:"40000",
                tel:"8934762348"
            },
            products:["Books","Pens","Pencils"]
        }

        }
        render(){
        return<div>
            <h3>{this.state.message}</h3>
            <button onClick={()=>{this.setState({message:"Hello from class component"})}}>change</button> 
             <ul>
                <li>Name:{this.state.persons.name}</li>
               
                <li>City:{this.state.persons.city}</li>
                <li>Salary:{this.state.persons.sal}</li>
                <li>Telephone:{this.state.persons.tel}</li>
            </ul>
            <hr/>
            <ul>
                {this.state.products.map((products)=>{
                    return<li> {products}</li> 
                
                })}
            </ul>
        </div>
    }
}