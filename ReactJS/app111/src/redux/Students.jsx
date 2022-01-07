
import React,{Component} from 'react'
import { connect } from 'react-redux'
import { deleteStudentsAction, getAllAtudents } from './action'

 class Students extends Component {
     
    
     ShowStudents=()=>{
        console.log(this.props)
     this.props.dispatch(getAllAtudents())
    }
    deleteStudent=()=>{
        console.log(this.props)
        this.props.deleteStudent()
    }
    render(){
    return (
        <div>
            <h2>Click to get the students details</h2>
            <button onClick={this.ShowStudents}>Click</button>
            <button onClick={this.deleteStudent}>Delete</button>

            {this.props.students.students.map((stu,i)=>{
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
function mapStatetoProps(dispatch) {
    return{
        getAllstudents:()=>dispatch(getAllAtudents()),
        deleteStudent:(student)=>dispatch(deleteStudentsAction(student))

    }
}

export default connect(StateToPros,mapStatetoProps)(Students)
