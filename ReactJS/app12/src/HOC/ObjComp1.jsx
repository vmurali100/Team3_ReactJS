import React, { PureComponent } from 'react'
import { ParentComp } from './ParentComp'

class ObjComp1 extends PureComponent {
    render() {
        return (
            <div>
                <ul style={{ color: "blue" }}>
                    {this.props.employee.map((emp) => {
                        return <div>
                            <li>name:{emp.name}</li>
                            <li>username:{emp.username}</li>
                            <li>email:{emp.email}</li>

                        </div>
                    })}
                <button onClick={
                    this.props.employee(this.state.employee)
                }>click it</button>
                </ul>
            </div>
        )
    }
}
export default ParentComp(ObjComp1)
