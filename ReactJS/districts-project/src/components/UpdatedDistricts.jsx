import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

export const UpdatedDistricts = () => {
  const [DistData, setNewDistData] = useState([])
  const [Data,setData]=useState(false)
  const [DistInfo, setDistInfo] = useState({
    id: "",
    district: "",
    constituency: []
  });
  useEffect(()=>{
    axios.get("http://localhost:3000/districtDetails").then((res)=>{
           console.log(res.data);
           setNewDistData(res.data)
             })
  },[])
  const handleChange = (e) => {
    let newInfo = { ...DistInfo }
    newInfo[e.target.name] = e.target.value
    setDistInfo(newInfo)
  }
  const AddDistInfo = () => {
    let myData = [...DistData]
    myData.push(DistInfo)
    console.log(myData);
    axios.post("http://localhost:3000/districtDetails", DistInfo).then((res) => {
      console.log(res.data);
      localStorage.setItem(("DistInfo"), JSON.stringify(DistInfo))
    })
    setNewDistData(myData)
    clearForm()
  }
  const clearForm = () => {
    let newInfo = {
      id: "",
      district: "",
      constituency: []
    }
    setDistInfo(newInfo)
  }
  const deleteHandler=(DistInfo)=>{
  console.log(DistInfo);
  axios.delete("http://localhost:3000/districtDetails/"+DistInfo.id).then((res)=>{

    console.log("deleted");
  })
  }
  const editHandler=(DistInfo)=>{
    setDistInfo(DistInfo)
  }
  const UpdatedDistricts=()=>{
  axios.put("http://localhost:3000/districtDetails/"+DistInfo.id,DistInfo).then((res)=>{
    console.log(DistInfo);
    setDistInfo(DistInfo)
    clearForm()
  })
  }
  return <div>
    <div className="container">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Id</label>
        <input type="text" class="form-control" name='id' value={DistInfo.id}
          onChange={(e) => { handleChange(e) }} />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">District</label>
        <input type="text" class="form-control" name='district' value={DistInfo.district}
          onChange={(e) => { handleChange(e) }} />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Constituency</label>
        <input type="text" class="form-control" name='constituency' value={DistInfo.constituency}
          onChange={(e) => { handleChange(e) }} />
      </div>
   
      <button type="button" class="btn btn-primary" onClick={AddDistInfo}>Submit</button>
     <button type='button' className='btn btn-info' onClick={UpdatedDistricts}>Update</button>
    </form>
    </div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">District</th>
      <th scope="col">Constituency</th>
      <th>Edit</th>
      <th>Delete</th>
      
    </tr>
  </thead>
  <tbody>
    {DistData.map((dt,i)=>{
    return <tr key={i}>
  <td>{dt.id}</td>
  <td>{dt.district}</td>
  <td>{dt.constituency}</td>
  <td><button type=' button' className='btn btn-warning' onClick={()=>{editHandler(dt)}}>Edit</button></td>
   <td><button type='button' className='btn btn-danger' onClick={()=>{deleteHandler(dt)}}>Delete</button></td>
    </tr>
    })}
  </tbody>
</table>
  </div>;
};
export default UpdatedDistricts