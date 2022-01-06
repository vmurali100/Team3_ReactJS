import { Component } from 'react'
import Sai1 from './Sai1'

export default class Sai extends Component{
    constructor(){
        super()

        this.state={

            person:{
                id:"006",
                fname:"Sai",
                email:"sai@gmail.com",
                proffession:"front-end developer"
            },
            team:["sai","hareesh"]

        }
    }
    render(){
        return(
            <div>
                <Sai1
                obj={this.state.person}/>
            </div>
        )
    }
}