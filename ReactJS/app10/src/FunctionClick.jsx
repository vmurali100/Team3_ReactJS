import React from 'react'

export default function FunctionClick() {
    function clickHandler(){
        console.log('click')
    }
    return (
        <div>
            <button onClick={(clickHandler)}>click</button>
        </div>
    )
}
