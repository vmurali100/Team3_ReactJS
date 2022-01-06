export  default function User1(props){
    console.log(props.personInfo)
    return (
        <div>
            <h1>iam from user component</h1>

            <ul>
                <li>id:{props.personInfo.id}</li>
                <li>fname:{props.personInfo.fname}</li>
                <li>lname:{props.personInfo.lname}</li>
                <li>email:{props.personInfo.email}</li>
                <li>proffession:{props.personInfo.proffession}</li>
            </ul>
                <h4>{props.arr}</h4>
                <h1>{props.message}</h1>
    
           <div>
             
           </div>
        </div>
    )
}