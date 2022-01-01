import React,{useState} from 'react'
import { DataProvider, SecondDataProvider } from './home'
import { Newparant } from './Newparant'

export const NewHome = () => {
    const [Data, setData] = useState("Hello from new component data")
    const [value, setvalue] = useState("Heloo from data")
    return (
        <div>
            <DataProvider value={Data}>
                {/* <SecondDataProvider value={value}> */}
            <h2>Hello Info</h2>
            <Newparant/>
            {/* </SecondDataProvider> */}
            </DataProvider>
        </div>
    )
}
