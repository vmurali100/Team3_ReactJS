import React, { Component } from 'react'
import ChildRef2 from './ChildRef2'

export default class InputRef2 extends Component {
    constructor(props) {
        super(props)
    
    //    this.InputRef2=React.createRef()
    //    this.InputRef2=null
    //    this.cbIRef=(element)=>{
    //     this.InputRef2=element
    //    }

    this.childCompRef=React.createRef()
    }
    handleWelcome=()=>{
        this.childCompRef.current.showWelcome()
    }
    
    render() {
        return (
            <div>
                {/* <input type="text" ref={this.InputRef2}/> */}
                {/* <input type="text" ref={this.cbIRef}/> */}

                <button onClick={this.handleWelcome}>focus childref</button>
                <hr />
                <ChildRef2 ref={this.childCompRef}/>

            </div>
        )
    }
    componentDidMount(){
        console.log(this.childCompRef)
        // this.InputRef2.current.focus()//
        // this.InputRef2.focus()
    }
}
