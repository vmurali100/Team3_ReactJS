import { Component } from "react";

export default class Venni extends Component{
    constructor(){
        super()
        this.state={
            message:"Hello 123",
            book:{
                class:"Inter",
                sub:"Maths",
                price:"350"
            },
        vehicles:["Bikes","cars",]
        }
    }
    render(){
        return <div>
            <h3>{this.state.message}</h3>
            <ul>
                <li>Class:{this.state.book.class}</li>
                <li>Subject:{this.state.book.sub}</li>
                <li>Price:{this.state.book.price}</li>
            </ul>
            <hr/>
            <ul>
                {this.state.vehicles.map((vehicles)=>{
              return <li>{vehicles}</li>
                })}
            </ul>
        </div>
    }
}