import React, { Component } from 'react'

export  function DestrucreFun({name,city}) {
//   method1  passing the parameters name,city
    return (
        <div>
            <h2>Hello my name {name} from {city}.</h2>
        </div>
    )
}


export default function DestrucreFun1(props) {
    // method 2 passing the attributes in  inside the function body using props
    const{name,city}=props
    return (
        <div>
            <h2>Hi i am {name} from {city}.</h2>
        </div>
    )
}


export  class DestrucreFun2 extends Component {
    render() {
        // passing the arguments in class component
        const{name,city}=this.props
        return (
            <div>
                <h2>hello {name}</h2>
            </div>
        )
    }
}


