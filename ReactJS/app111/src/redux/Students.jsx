
import React,{Component} from 'react'
import { connect } from 'react-redux'
import { getAllAtudents } from './action'

 class Students extends Component {
     
    
     ShowStudents=()=>{
        console.log(this.props)
     this.props.dispatch(getAllAtudents())
    }
    render(){
    return (
        <div>
            <h2>Click to get the students details</h2>
            <button onClick={this.ShowStudents}>Click</button>

            {this.props.students.map((stu,i)=>{
                 return <h3 key={i}>{stu}</h3>
            })}
        </div>
    )
}
 }
function StateToPros(state){
    console.log(state)
    
    return{
        students:state

    }
}
export default connect(StateToPros)(Students)
