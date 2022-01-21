import React,{useState} from 'react'

export const Sample1 = () => {
    const [count, setcount] = useState(0)
     const Increment=()=>{
        //  setcount(7)
        setcount(count+1)
     }
    return (
        <div>
            {count}
            <button onClick={Increment}>click it</button>
        </div>
    )
}
