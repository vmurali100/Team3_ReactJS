import React from 'react'

export default function Child(props) {
    console.log(props.empinfo)
    return (
        <div>
            <h1>iam child component</h1>
            <ul>
                <li>{props.empinfo.fname}</li>
                <li>{props.empinfo.email}</li>
                <li>{props.empinfo.experience}</li>
                <li>{props.empinfo.proffession}</li>
            </ul>
        </div>
    )
}
