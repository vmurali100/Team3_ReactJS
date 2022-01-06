import React, { Component } from 'react'

export default class ChildComp4 extends Component {
    constructor(props){
        super(props)

        this.state={
            mobiles:["redmi","lenovo","realme","Asus","oneplus"]
        }
    }
    render() {
        return (
            <div>
                <button onClick={()=>{this.props.sendmobiles(this.state.mobiles)}}>click</button>
            </div>
        )
    }
}
