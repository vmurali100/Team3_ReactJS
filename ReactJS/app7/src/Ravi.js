import React, {useState } from "react"

export function Ravi (){
    const [users,setusers]=useState([{"fname":"lokesh","lname":"s d"},
    {"fname":"hareesh","lname":"hari"},{"fname":"dilip","lname":"s m"}])
    return(
        <div>
            <ul>
                {users.map((user,i)=>{
                    return <li key={i}>{user.fname}-{user.lname}</li>
                })}
            </ul>
        </div>
    )
}

export const Blue = () =>{
    let [color,showcolor]=useState([{"fcolor":"blue","scolor":"green"},
    {"fcolor":"yellow","scolor":"white"},{"fcolor":"cyan","scolor":"purple"}])
    return(
        <div>
            <ul>
                {color.map((blue,i)=>{
                        return <li key={i}>{blue.fcolor}-{blue.scolor}</li>
                })}
            </ul>
        </div>
    )
}

// export class Green extends Component{
//     render(){
//         const [cgreen,scgreen] =this.setState([{"fcolor":"blue","scolor":"green"},
//         {"fcolor":"yellow","scolor":"white"},{"fcolor":"cyan","scolor":"purple"}])
    
//         return(
//             <div>
//                 <ul>
//                     {cgreen.map((cgr)=>{
//                         return <li>{cgr.fcolor}-{cgr.scolor}</li>
//                     })}
//                 </ul>
//             </div>
//             )
//         }
    
    
//     }


export function Red(){
    const [cred,showred]=useState([{"fcolor":"blue","scolor":"green"},
    {"fcolor":"yellow","scolor":"white"},{"fcolor":"cyan","scolor":"purple"}])

    return(
        <div>
            <ul>
                {cred.map((cr,i)=>{
                    return <li key={i}>{cr.fcolor}-{cr.scolor}</li>
                })}
            </ul>
        </div>
    )
}

export const Yellow = () =>{
    let [cYellow ,sYellow ]=useState([{"fcolor":"yellow","scolor":"green"},
    {"fcolor":"yellow","scolor":"white"},{"fcolor":"cyan","scolor":"purple"}])
    return(
        <div>
            <ul>{cYellow.map((cY)=>{
                return <li>{cY.fcolor}-{cY.scolor}</li>
            })}</ul>
        </div>
    )
}