import React,{useState} from 'react'

function AllUsers() {
    const [users, setusers] = useState([{"fname":"Roderic","lname":"Forgey"},{"fname":"Saima","lname":"Nordby"},{"fname":"Alyce","lname":"Aresti"}])
    return (
        <div>
            <ul>
                {users.map((user,i)=>{
                    return <li key={i}>{user.fname} - {user.lname}</li>
                })}
            </ul>
        </div>
    )
}

export default AllUsers
