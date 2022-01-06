import React from 'react'

export const Person = (props) => {
    console.log(props.Persondel.length)
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>tel</th>
                        <th>address</th>
                        <th>city</th>
                        <th>state</th>
                        <th>zip</th>
                    </tr>
                </thead>
                <tbody>
                    {props.Persondel.map((PDetails,i) => {
                        return<tr key={i}>
                            <th>{PDetails.fname}</th>
                            <th>{PDetails.lname}</th>
                            <th>{PDetails.tel}</th>
                            <th>{PDetails.address}</th>
                            <th>{PDetails.city}</th>
                            <th>{PDetails.state}</th>
                            <th>{PDetails.zip}</th>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}
