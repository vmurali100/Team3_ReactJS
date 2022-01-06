import React, { Component } from 'react'

export default class Lifecycle3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             myFavouriteColor:"skyblue"
        }
        console.log("myFavouriteColor is skyblue")
    }
    static getDerivedFromProps(props,state){
           return {myColor:props.Color}
    }
    componentDidMount() {
        console.log("Iam from componentDidMount")
    }
    
    render() {
        console.log("iam from render")
        return (
            <div>
                <h1>{this.state.myFavouriteColor}</h1>
                <h1>{this.state.myColor}</h1>

            </div>
        )
    }
}
