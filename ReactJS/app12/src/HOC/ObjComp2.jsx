import React from 'react'
import { ParentComp } from './ParentComp'

 const ObjComp2 = (props) => {
    return (
        <div>
            <ul style={{color:"red"}}>
                {props.employee.map((emp)=>{
                    return <div>
                        <li>street:{emp.address.street}</li>
                        <li>zipcode:{emp.address.zipcode}</li>
                        <li>phone:{emp.phone}</li>
                        <li>website:{emp.website}</li>
                    </div>
                })}
            </ul>
        </div>
    )
}
export default React.memo(ParentComp(ObjComp2))
