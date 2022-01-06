import React, { Component, createRef } from 'react'
import ChildRef from './ChildRef'

export default class InputRef4 extends Component {
    constructor(props) {
        super(props)
    
    //    this.InputRef4=React.createRef()
    this.childCompRef=React.createRef()
}
handleMessage=()=>{
    this.childCompRef.current.showAlertMessage()
}
    
    render() {
        return (
            <div>
                <button onClick={this.handleMessage}>childref4</button>
                <hr />
                <ChildRef ref={this.childCompRef}/>
                {/* <input type="text" ref={this.InputRef4}/> */}
            </div>
        )
    }
    componentDidMount(){
        console.log(this.childCompRef)
        // this.InputRef4.current.focus()
    }
}
