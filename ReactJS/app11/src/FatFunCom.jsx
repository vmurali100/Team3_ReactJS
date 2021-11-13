import React, { useState } from "react";

export const User=()=>{
    let [users,setusers]=useState([{"fname":"Soledad","lname":"Wahl"},{"fname":"Yiming","lname":"Sapp"},{"fname":"Eden","lname":"Abundo"}])
    return <div>
        {/* <h2>Hello</h2> */}
        {users.map((details,i)=>{
            return <li key={i}>User : {details.fname+" "+ details.lname}</li>
        })}
    </div>
}