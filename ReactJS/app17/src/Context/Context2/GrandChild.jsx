import React from 'react'
import { CarsProvider } from './User'

export const GrandChild = ({cars}) => {
    return (
        <div>
            <CarsProvider>
               Cars In GrandChild : {cars}
            {/* <h2>Cars in GrandChild: {cars}</h2> */}
            </CarsProvider>
             
            
        </div>
    )
}
