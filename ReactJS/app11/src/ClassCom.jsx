import React, { Component, useState } from "react";
export class Data extends Component{
    constructor(){
        super()
            this.state={
                person:[
                    {
                        "fname": "Martie",
                        "lname": "Malstrom",
                        "tel": "(446)759-1376",
                        "address": "1508 Sollicitudin Ave",
                        "city": "Carrollton",
                        "state": "CA",
                        "zip": 76213
                    },
                    {
                        "fname": "Dennis",
                        "lname": "Romero",
                        "tel": "(170)221-0406",
                        "address": "4905 Velit Rd",
                        "city": "Conneaut",
                        "state": "NE",
                        "zip": 87972
                    },
                    {
                        "fname": "Rupa",
                        "lname": "Suzanne",
                        "tel": "(403)783-6413",
                        "address": "264 Elit Ave",
                        "city": "Larimore",
                        "state": "FL",
                        "zip": 96122
                    }
                ]
            }
        
    }
    render(){
        return <div>
          <ul>
          {this.state.person.map((paramater,i)=>{
              return <li key={i}>Person name : {paramater.fname+" "+paramater.lname} </li>
          })}
          </ul>
        </div>
    }
}
