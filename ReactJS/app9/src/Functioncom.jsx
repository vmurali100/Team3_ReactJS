
export const Acomp=(props)=>{
    console.log(props.personInfo)
    return <div>
         <h2>I'm from Function Comp</h2>
         <li>Person Name:{props.personInfo.fName+" " +props.personInfo.lName}</li>
                <br />
         <li>Person PhoneNo:{props.personInfo.phoneNo}</li>
    </div>
}