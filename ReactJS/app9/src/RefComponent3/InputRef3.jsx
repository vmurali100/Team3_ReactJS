import React, { Component } from 'react'
import ChildRef3 from './ChildRef3'

export default class InputRef3 extends Component {
    constructor(props) {
        super(props)

        // this.InputRef3=React.createRef()
        // this.InputRef3 = null
        // this.cbIRef = (element) => {
        //     this.InputRef3 = element
        // }
        this.childCompRef=React.createRef()
    }
    handleWelcome=()=>{
        this.childCompRef.current.showWelcome()
    }

    render() {
        return (
            <div>
                <button onClick={this.handleWelcome}>Childref3</button>
                {/* <input type="text" ref={this.InputRef3} /> */}
                {/* <input type="text" ref={this.cbIRef} /> */}
                <ChildRef3 ref={this.childCompRef}/>
            </div>
        )
    }
    componentDidMount() {
        // this.InputRef3.current.focus()
        // this.InputRef3.focus()
        console.log(this.childCompRef)
    }
}
