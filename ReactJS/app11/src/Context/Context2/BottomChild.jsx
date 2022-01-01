import React from 'react'
import { ContainerConsumer } from './Container'

export const BottomChild = () => {
    return (
        <div>
            <ContainerConsumer>
                {(val)=>{
            return <h2>Hello from bottom most component:{val}</h2>
                }}
            </ContainerConsumer>
        </div>
    )
}
