import React, { Component } from 'react'

export default class Sample1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        }

    }
    componentDidMount() {
        this.setTimeee = setInterval(() => this.setTime(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.setTimeee)
    }
    setTime() {
        this.setState((state, props) => {
            console.log(state.date);
            return {
                date: new Date()
            }
        })
    }
    render() {
        return (
            <div>
                <p>The current time is {this.state.date.toString()}</p>       
             </div>
        )
    }
}
