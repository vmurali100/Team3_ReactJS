import React, { PureComponent } from 'react'
import { ParentComp } from '../HigherOrderComp3/ParentComp'

 class Object1 extends PureComponent {
    
    
    render() {
        // console.log(this.props.persons)
        return (
            <div>
                {/* <h2>{this.props.persons}</h2> */}
                <h2>hello</h2>
                <ul>{this.props.persons.map((person)=>{
                    return <div>
                        <li>Id : {person.id}</li>
                        <li>Name : {person.name}</li>
                        <li>Email : {person.email}</li>
                        <li>address : {person.address.city}</li>
                        <br/>
                    </div>
                })}</ul>
            </div>
        )
    }
}
export default ParentComp(Object1)
