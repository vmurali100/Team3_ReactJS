import React, { PureComponent } from 'react'
import { ParentComp } from './ParentComp'

class Array2 extends PureComponent {
    render() {
        return (
            <div>
               <ul style={{color:"blue"}}>
               <h3>username:{this.props.lokesh.username}</h3>
                <h3>email:{this.props.lokesh.email}</h3>

                <button onClick={this.props.showDetails}>lokesh</button>
               </ul>

               <ul style={{color:"purple"}}>
               <h3>username:{this.props.chandu.username}</h3>
                <h3>email:{this.props.chandu.email}</h3>
               </ul>

               <ul style={{color:"red"}}>
               <h3>username:{this.props.Hareesh.username}</h3>
                <h3>email:{this.props.Hareesh.email}</h3>
               </ul>

               <ul style={{color:"orange"}}>
               <h3>username:{this.props.Abhi.username}</h3>
                <h3>email:{this.props.Abhi.email}</h3>
               </ul>

            </div>
        )
    }
}
export default ParentComp(Array2)
