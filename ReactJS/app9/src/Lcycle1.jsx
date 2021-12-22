import React,{useState,useEffect} from 'react'

export default function Lcycle1() {
    const [value, setvalue] = useState("")
    useEffect(() => {
    let Data="Hello from data "
    
        setvalue(Data)
    }, [])

    return (
        <div>
            <h2>Hello </h2>
        </div>
    )
}

