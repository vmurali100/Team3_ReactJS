import React,{Component} from 'react'
export default class Suri extends Component{
    
      constructor(){
          super()
          this.state={
              message:"Hello from ReactJs", // string
              user:{
                  fname:"chandu",
                  lname:"babu",
                  email:"chandu@gmail.com"
              },//object
           student:["Hari","Lokesh","Abi","Chandu"]   //array
          }
      }
    
    render(){
      return <div>
          <h2>{this.state.message}</h2>
          <h2>Hello </h2>
          <ul>
              <li>First Name:{this.state.user.fname}</li>
              <li>Last Name:{this.state.user.lname}</li>
              <li>Email:{this.state.user.email} </li>
          </ul>
          <hr/>
          <ul>
            {this.state.student.map((student)=>{
                return <li>{student}</li>          
                  })}
          </ul>
      </div>
    }
}