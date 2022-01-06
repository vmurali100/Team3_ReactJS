import React from 'react'

export const NormalComponent1 = ({message}) => {
    console.log("iam rendering")
    return (
        <div>
            <h1>message from parent component:{message}</h1>
        </div>
    )
}
