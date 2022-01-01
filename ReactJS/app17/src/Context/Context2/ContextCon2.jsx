import React, { Component } from 'react'
import { ParentContext2 } from './ParentContext2'
import { CarsProvider } from './User'

export default class ContextCon2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cars:["Swift","BWM","Audi","Bolero"]
        }
    }
    
    render() {
        return (
            <div>
                <CarsProvider value={this.state.cars}>
                {/* <h2>Cars : {this.state.cars}</h2> */}
                <ParentContext2 cars={this.state.cars}/>
                </CarsProvider>
                
            </div>
        )
    }
}
