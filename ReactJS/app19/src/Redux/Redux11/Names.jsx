import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllNames } from './Action'

class Names extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    getNames =()=>{
        console.log(this.props)
         return this.props.dispatch(getAllNames())

    }
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.getNames }>Click </button>
                {this.props.names && this.props.names.map((user)=>{
                    return <ul>
                        <li>First Name : {user.fname}</li>
                        <li>Last Name : {user.lname}</li>
                        
                    </ul>
                })}
            </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     return this.props.dispatch(getAllNames())
    // }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        names:state
    }
}

export default connect(mapStateToProps)(Names)