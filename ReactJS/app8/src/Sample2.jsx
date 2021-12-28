import React, { Component } from 'react'
import Child2 from './Child2'

export default class Sample2 extends Component {
    constructor(props) {
        super(props)
    // this.myref=React.createRef()
    this.newref=React.createRef()
    }
    handleMsg=()=>{
        this.newref.current.showMsg()
    }
    render() {
        return (
            <div>
                <h2>Hello from parent component</h2>
                {/* <input type="text" ref={this.myref} /> */}
                <button onClick={this.handleMsg}>Show msg</button>
                <Child2 ref={this.newref}/>
            </div>
        )
    }
    componentDidMount(){
        // this.myref.current.focus()
    }
}
