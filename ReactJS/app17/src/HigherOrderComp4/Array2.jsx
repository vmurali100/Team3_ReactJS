import React from 'react'
import { ParentContainer } from './ParentContainer'

const Array2 = (props) => {
    return (
        <div>
            {props.name.map((val) => {
                return <div>
                    <h4>Names : {val}</h4>

                </div>

            })}
            <hr />
            <h4>Company Name : {props.company.name}</h4>
            <h4>Company Email : {props.company.email}</h4>


        </div>
    )
}
export default React.memo(ParentContainer(Array2))