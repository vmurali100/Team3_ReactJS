export default function Hareesh1(props){
    console.log(props.data)
    return(
        <div>
            <ul>
                <li>id:{props.data.id}</li>
                <li>fname:{props.data.fname}</li>
                <li>email:{props.data.email}</li>
                <li>proffession:{props.data.proffession}</li>
            </ul>

            <ul>
                <li>{props.message}</li>
                <h1>{props.array}</h1>
            </ul>
        </div>
    )
}