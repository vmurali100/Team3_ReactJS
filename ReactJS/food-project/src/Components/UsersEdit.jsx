// import axios from 'axios';
// import React,{useState} from 'react';


// export const UsersEdit = () => {
//   const [users, setusers] = useState("")
//   const [user, setUser] = useState({
//       id: "",
//       userName: "",
//       email: "",
//       password: "",
//       address: {
//           houseNo: "",
//           city: "",
//           street: "",
//           state: "",
//           zip: ""
//       }
//   })
//   const handleChange = (e) => {
//       let newUser = { ...user }
//       newUser[e.target.name] = e.target.value
//       setUser(newUser)
//   }
//   const handleAddressChange = (e) => {
//     const newaddress = { ...user }
//     let address = user.address;
//     var key = e.target.name;
//     var value = e.target.value;
//     address[key] = value;
//     user.address = address;
//     setUser(newaddress)
// }
// const searchUser=()=>{
//   axios.get("http://localhost:3000/register").then((res)=>{
//    let user=res.data.find((usr)=>usr.register.indexOf(users))
//   })
// }
//   return <div>
//     <h2>Edit here</h2>
//     <form>
//             <div className="mb-3">
//                 <label for="id" className="form-label">Id</label>
//                 <input type="text" className="form-control" id="" name="id" value={user.id}
//                     onChange={(e) => handleChange(e)} />
//             </div>
//             <div className="mb-3">
//                 <label for="  userName" className="form-label">UserName</label>
//                 <input type="text" className="form-control" name="userName" value={user.userName} onChange={(e) => handleChange(e)} />
//             </div>
//             <div className="mb-3">
//                 <label for="email" className="form-label">Email address</label>
//                 <input type="email" className="form-control" name="email" value={user.email} onChange={(e) => handleChange(e)} />
//                 <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//             </div>
//             <div className="mb-3">
//                 <label for="password" className="form-label">Password</label>
//                 <input type="password" className="form-control" name="password" value={user.password} onChange={(e) => handleChange(e)} />
//             </div>

//             <div className="address">
//                 <label>Address:</label><br />
//                 <label for="houseNo" className="form-label">House No</label>
//                 <input type="text" className="form-control" name="houseNo" value={user.address.houseNo}
//                  onChange={(e) => handleAddressChange(e)} />
//             </div>
//             <div className="mb-3">
//                 <label for="street" className="form-label">Street</label>
//                 <input type="text" className="form-control" name="street" value={user.address.street} 
//                 onChange={(e) => handleAddressChange(e)} />
//             </div>
//             <div className="mb-3">
//                 <label for="city" className="form-label">City</label>
//                 <input type="text" className="form-control" name="city" value={user.address.city}
//                  onChange={(e) => handleAddressChange(e)} />
//             </div>
//             <div className="mb-3">
//                 <label for="state" className="form-label">State</label>
//                 <input type="text" className="form-control" name='state' value={user.address.state}
//                  onChange={(e) =>handleAddressChange(e)} />
//             </div>
//             <div className="mb-3">
//                 <label for="zip" className="form-label">Zip</label>
//                 <input type="text" className="form-control" name="zip" value={user.address.zip}
//                  onChange={(e) => handleAddressChange(e)} />
//             </div>
//             {/* <button type="button" className="btn btn-primary" onClick={addUser}>Submit</button> */}
//         </form>

//   </div>;
// };
