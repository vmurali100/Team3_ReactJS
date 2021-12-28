import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class Sample1 extends Component {
   constructor(props) {
       super(props)
   
    //    this.ref=React.createRef()
    //    this.inputRef=React.createRef()
    this.ChildCompref=React.createRef()

   }
   handleMsg=()=>{
       this.ChildCompref.current.showInputMsg()
   }
    render() {
        return (
            <div>
                <h2>Hello</h2>
                <button onClick={this.handleMsg}>Show message</button>
                <hr />
                {/* <input type="text" ref={this.ref}/> */}
                {/* <input type="text" ref={this.inputRef} /> */}
                <ChildComp ref={this.ChildCompref}/>
            </div>
        )
    }
    componentDidMount(){
        // this.ref.current.focus()
        // this.inputRef.current.focus()
    }
}
