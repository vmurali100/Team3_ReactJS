import React, { Component } from 'react'

export default class UnMounting5 extends Component {
    componentWillUnmount(){
        alert("iam going to be removed now")

    }
    render() {
        return (
            <div>
                <h1>hello iam visible now</h1>
            </div>
        )
    }
}
