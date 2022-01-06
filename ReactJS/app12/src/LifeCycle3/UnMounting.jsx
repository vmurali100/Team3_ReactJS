import React, { Component } from 'react'

export default class UnMounting extends Component {
    componentWillUnmount() {
        alert("iam going to be removed now")
    }
    render() {
        return (
            <div>
                <h2>hello iam visible now</h2>

            </div>
        )
    }
}
