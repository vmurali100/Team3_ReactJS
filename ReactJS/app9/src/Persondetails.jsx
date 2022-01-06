// export default class Persondetails extends Component {
//     constructor(props){
//         super(props)
//         console.log(props.Pdetails.length)
//     }
//       render() {

import React from 'react'

export default function Persondetails(props) {
    console.log(props.Pdetails.length)
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>username</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                    {props.Pdetails.map((pdet, i) => {
                        return <tr key={i}>
                            <td>{pdet.id}</td>
                            <td>{pdet.email}</td>
                            <td>{pdet.username}</td>
                            <td>{pdet.password}</td>
                        </tr>

                    })}
                </tbody>
            </table>
        </div>
    )
}




