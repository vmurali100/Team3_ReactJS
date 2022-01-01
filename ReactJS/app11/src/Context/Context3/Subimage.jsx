import React from 'react'
import { ImageConsumer } from './Context'

export const Subimage = () => {
    return (
        <div>
            <ImageConsumer>
                {(val)=>{
                    return <h3>Users email:{val.email}</h3>
                }}
            </ImageConsumer>
        </div>
    )
}
