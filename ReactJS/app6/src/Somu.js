import {useState} from "react"
export function Somu() {
    let [greeting, setgreetings] = useState("")
    let [person, setperson] = useState({ fname: "" })
    let [users, setuser] = useState([])

    function changegreetings() {
        setgreetings("welcome ")
    }
    function assignobject() {
        setperson({ fname: "Somu" })
    }
    function assignarray() {
        setuser(["somu", "s m"])
    }

    return (
        <div>
            <h2>{greeting}</h2>
            <button onClick={changegreetings}>click</button>
            <hr />
            <h2>{person.fname}</h2>
            <button onClick={assignobject}>click</button>
            <hr />
            <h2>{users}</h2>
            <button onClick={assignarray}>click</button>
            <hr />
        </div>
    )
}

export const Gajendra = () => {
    let [message, changemessage] = useState("welcome")
    let [person, persondetails] = useState({ fname: "gaja" })
    let [employee, employeedetails] = useState(["gajendra"])

    function Changing() {
        changemessage("welcome to gaja")
    }
    function Changepersond() {
        persondetails({ fname: "gajendra" })
    }
    function changeEmpDel() {
        employeedetails(["gaja", "gajendra"])
    }
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={Changing}>click</button>
            <hr />
            <h1>{person.fname}</h1>
            <button onClick={Changepersond}>click</button>
            <hr />
            <h1>{employee}</h1>
            <button onClick={changeEmpDel}>click</button>
        </div>
    )
}
