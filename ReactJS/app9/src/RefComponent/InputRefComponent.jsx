import React, { Component } from 'react'
import ChildInputRef from './ChildInputRef'

export default class InputRefComponent extends Component {
    constructor(props) {
        super(props)

        //    this.inputRef=React.createRef()
        //    this.Ref=React.createRef()
        this.ChildCompoRef = React.createRef()


    }
    componentDidMount() {
        // this.Ref.current.focus()

        // this.inputRef.current.focus()
        console.log(this.ChildCompoRef)

    }
    handleWelcome = () => {
        this.ChildCompoRef.current.showWelcome()
    }

    render() {
        return (
            <div>
                <button onClick={this.handleWelcome}>Child input</button>
                <hr />
                <ChildInputRef ref={this.ChildCompoRef} />
                {/* lokesh <input type="text" ref={this.inputRef}/> <br/> */}
                {/* chandu <input type="text" ref={this.Ref}/> */}
            </div>
        )
    }
}
