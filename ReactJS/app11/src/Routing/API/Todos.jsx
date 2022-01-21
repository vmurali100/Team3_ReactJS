import axios from 'axios';
import React, { useEffect , useState } from 'react';

export const Todos = () => {
    const [todos, settodos] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(({ data }) => {
            console.log(data)
            settodos(data)
        })
    },[])
    return <div>
        {todos.map((tds) => {
            return <p><i>{tds.title}</i></p>

        })}
    </div>
};
