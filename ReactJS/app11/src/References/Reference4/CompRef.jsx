import React, { Component, createRef } from 'react'
import { ReffChild } from './ReffChild'

export default class CompRef extends Component {
    constructor(props) {
        super(props)

    // this.inputref=React.createRef()
    this.ReffChild=React.createRef()
    // this.cbRef=null
    // this.setcbRef=(element)=>{
    //     this.cbRef=element
    // }
    }
    handleClick=()=>{
        this.ReffChild.current.Hello()
    }
    
    render() {
        // console.log(this.ref)
        return (
            <div>
                <h2>Hello</h2>
                <button onClick={this.handleClick}>Click</button>
                <input type="text"  ref={this.setcbRef} ref={this.Hello} />
                <ReffChild ref={this.ReffChild}/>
            </div>
        )
    } 
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        
        // this.inputref.current.focus()
    }
}
