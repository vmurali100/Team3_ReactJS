import React, { Component } from 'react'
import { Childarrowcomp } from './Childarrowcomp';
import Purechildcomp from './Purechildcomp';

export default class Classcomp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:1,
             message:'hello from components'
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({count:this.state.count+1})
        }, 1000);
    }
    render() {
        console.log('hello from main')
        return (
            <div>
                <Childarrowcomp count={this.state.count}/>
                <Purechildcomp message={this.state.message}/>
            </div>
        )
    }
}
