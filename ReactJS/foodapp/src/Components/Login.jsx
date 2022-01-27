import React,{useState} from 'react';

export const Login = () => {
  const [loginDetails, setloginDetails] = useState({
    email:"",
    password:""
  });
  const getUserCredential=()=>{
    // console.log(loginDetails);

      var storedValue=JSON.parse(localStorage.getItem("users"))
      console.log(storedValue);
      if(storedValue.email == loginDetails.email && storedValue.password == loginDetails.password){
          window.location.href="users"
      }else{
          alert("Invalid Email")
      }
  
  }
  const handleValues = (e) => {
    let newLoginDetails = { ...loginDetails }
    newLoginDetails[e.target.name] = e.target.value
    // console.log(setloginDetails);
    setloginDetails(newLoginDetails)
  }
  return <div>
    <h2>Login Page</h2>
    <form>
      <div className="container">
      <div  className="mb-3">
        <label htmlFor="exampleInputEmail1"  className="form-label">Email address</label>
        <input type="email"  className="form-control" value={loginDetails.email} name="email" onChange={(e) => { handleValues(e) }} aria-describedby="emailHelp"/>
        
      </div>
      <div  className="mb-3">
        <label htmlFor="exampleInputPassword1"  className="form-label">Password</label>
        <input type="password"  className="form-control" value={loginDetails.password} name="password" onChange={(e) => { handleValues(e) }}/>
      </div>
      
      <button type="button" onClick={getUserCredential} className="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>;
};
