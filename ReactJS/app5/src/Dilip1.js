export default function Dilip1(props){
    console.log(props.obj)

    return(
        <div>
            <ul>
                <li>id:{props.obj.id}</li>
                <li>fname:{props.obj.fname}</li>
                <li>email:{props.obj.email}</li>
                <li>proffession:{props.obj.proffession}</li>
            </ul>
            <h2>{props.msg}</h2>
            <h1>{props.array}</h1>
        </div>
    )
}