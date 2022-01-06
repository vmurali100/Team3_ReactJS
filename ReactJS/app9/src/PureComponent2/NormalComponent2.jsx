import React from 'react'

export const NormalComponent2 = ({message}) => {
    console.log("iam Normal component")
    return (
        <div>
            <h1>message from parent component:{message}</h1>
        </div>
    )
}
