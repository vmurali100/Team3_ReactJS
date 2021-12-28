import React from 'react'

export const Childarrowcomp = ({count}) => {
    console.log('child render')
    return (
        <div>
        <h2>Count value is:{count}</h2>
        </div>
    )
}
