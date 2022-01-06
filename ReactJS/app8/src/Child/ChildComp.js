import React, { Component } from 'react'
export default class ChildComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: ["lokesh", "chandu", "Sankar", "hareesh","Dilip"]
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.props.recieveData(this.state.users)}>show user</button>
            </div>
        )
    }
}
