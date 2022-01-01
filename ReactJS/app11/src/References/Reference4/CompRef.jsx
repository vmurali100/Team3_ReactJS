import React, { Component } from 'react'

export default class CompRef extends Component {
    constructor(props) {
        super(props)

    this.inputref=React.createRef
    }
    
    render() {
        console.log(this.ref)
        return (
            <div>
                <h2>Hello</h2>
                <input type="text" ref={this.inputref} />
            </div>
        )
    }
    // componentDidMount(){
    //     this.inputref.current.focus()
    // }
}
