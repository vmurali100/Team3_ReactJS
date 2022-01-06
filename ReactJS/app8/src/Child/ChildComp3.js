
import React, { Component } from 'react'
<hr/>
export default class ChildComp3 extends Component {
    constructor(props){
        super(props)
        this.state={
            fruits:["apple","mango","orange","guava","grapes"]
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.props.sendfruits(this.state.fruits)}>click fruits</button>
            </div>
        )
    }
}
