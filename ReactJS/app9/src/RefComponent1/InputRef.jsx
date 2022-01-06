import React, { Component } from 'react'

export default class InputRef extends Component {
    constructor(props) {
        super(props)
    
    //    this.inputRef=React.createRef()
        this.inputRef=null
       this.cbInputRef=(element)=>{
           this.inputRef=element
       }
       this.childCompRef=React.createRef()

    }
    handleWelcome=()=>{
        this.childCompRef.current.showWelcome()
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleWelcome}>focus childref</button>
                <hr />
                <ChildRef2 ref={this.childCompRef}/>
                {/* <input type="text" ref={this.inputRef}/> */}
                {/* <input type="text" ref={this.cbInputRef}/> */}
            </div>
        )
    }
    componentDidMount(){
        // this.inputRef.current.focus()
        // this.inputRef.focus()
        console.log(this.childCompRef)

    }
}
