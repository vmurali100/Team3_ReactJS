import React, { Component } from 'react'
import REfchild from './REfchild'

export default class REFcomp extends Component {
    constructor(props) {
        super(props)
        this.childRef=React.createRef()
    }
   
    handleClick=()=>{
        this.childRef.current.sayHello()
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click</button>
                <REfchild ref={this.childRef}/>
            </div>
        )
    }
}
