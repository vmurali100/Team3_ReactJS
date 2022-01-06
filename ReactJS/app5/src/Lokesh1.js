    const Lokesh1 = (props) =>{
    console.log(props.objs)
    return(
        <div>
            <ul>
                <li>id:{props.objs.id}</li>
                <li>fname:{props.objs.fname}</li>
                <li>email:{props.objs.email}</li>
                <li>proffession:{props.objs.proffession}</li>
            </ul>

            <ul>
                <li>message:{props.message}</li>
                <h2>teammates:{props.array}</h2>
            </ul>
        </div>
    )
}
 export default Lokesh1