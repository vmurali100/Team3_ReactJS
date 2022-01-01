import React,{useState  } from 'react'
import { ContainerProvider } from './Container'
import { Submain } from './Submain'

 const Home = () => {
    const [value, setvalue] = useState("Hello from home context")
    return (
        <div>
            <ContainerProvider value={value}>
                <Submain/>
                <h2>Hello </h2>
            </ContainerProvider>
        </div>
    )
}
export default Home
