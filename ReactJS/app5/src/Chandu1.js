const Chandu1 = (props) =>{
    console.log(props.person)
    return(
        <div>
           <ul>
               <li>id:{props.person.id}</li> 
                <li>fname:{props.person.fname}</li>
                <li>email:{props.person.email}</li>
                <li>proffession:{props.person.proffession}</li> 
            </ul>

            <div>
                <ul>
                <li>{props.message}</li>
            </ul> 
            <h1>{props.array}</h1> 
            </div>
        </div>
    )

}
export default Chandu1