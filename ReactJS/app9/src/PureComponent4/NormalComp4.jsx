import React from 'react'

export const NormalComp4 = ({message}) => {
    console.log("iam Normal component")
    return (
        <div>
            <h1>message from parent component:{message}</h1>
        </div>
    )
}
