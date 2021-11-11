export default function Mokshith(props){
    console.log(props.studentInfo)
    return<div>
        <h2>Hello from Mokshith component</h2>
       <ul>
           <li>First Name:{props.studentInfo.fname}</li>
           <li>Last Name:{props.studentInfo.lname}</li>
           <li>City:{props.studentInfo.city}</li>
           <li>Class:{props.studentInfo.class}</li>
       </ul>
    </div>
} 