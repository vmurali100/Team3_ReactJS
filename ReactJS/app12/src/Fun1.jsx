import React ,{useState}from 'react'

export default function Fun1() {
    const [greetings, setgreetings] = useState("welcome")
    return (
        <div>
            {greetings}
        </div>
    )
}
