import axios from 'axios';
import React, { useState ,useEffect} from 'react';

export const DistrctsDetails = () => {

    const [dtsName, showdistName] = useState([])
    const [isUpdate, setisUpdate] = useState(false);
    const [dtName, setdistrictName] = useState({
        id:"",
        districtName: "",
        constituency: [],
    });
    useEffect(() => {
     axios.get("http://localhost:3000/districts").then((res)=>{
         console.log(res.data);
         showdistName(res.data)
     })
    }, []);
    
   
    const handleValues = (e) => {
        let newDistrictName = { ...dtName }
        newDistrictName[e.target.name] = e.target.value

        setdistrictName(newDistrictName)
    }
    const addDistricts = () => {
        let newDst = [...dtsName]
        newDst.push(dtName)
        console.log(newDst);
       
        axios.post("http://localhost:3000/districts/", dtName).then((res) => {
            console.log(res.data);
            localStorage.setItem(("dtName"),JSON.stringify(dtName))
        })
        showdistName(newDst)
        clearForm()

    }
    const editDistrictValues=(dtName)=>{
        console.log(dtName);
        setdistrictName(dtName)
        setisUpdate(true)
        console.log(isUpdate);
    }
    const deleteDetails=(dtName)=>{
        console.log(dtName);
        axios.delete("http://localhost:3000/districts/"+dtName.id).then((res)=>{
        console.log("deleted");
        })
    }
    const updateDistrictsDetails=()=>{
       
        axios.put("http://localhost:3000/districts/"+ dtName.id,dtName).then((res)=>{
            console.log("updated");
            
        })
        setisUpdate(false)
        console.log(isUpdate);
        clearForm()
        
    }
    const clearForm=()=>{
        let newDts={
            id:"",
            districtName: "",
            constituency: [],
        }
        setdistrictName(newDts)
    }
    return <div className='container'>
        <div className="row">
            <div className="col-6">
                <form>
                <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Id</label>
                        <input type="email" className="form-control" name='id' value={dtName.id}  onChange={(e) => { handleValues(e) }} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter Districts</label>
                        <input type="email" className="form-control" name='districtName' value={dtName.districtName} onChange={(e) => { handleValues(e) }} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter Assembly Constituency</label>
                        <input type="email" className="form-control" name='constituency' value={dtName.constituency} onChange={(e) => { handleValues(e) }} aria-describedby="emailHelp" />
                    </div>
                    {isUpdate == true &&  <button type="button" onClick={updateDistrictsDetails} className="btn btn-primary">Update Districts Details</button>}
                   {isUpdate == false &&  <button type="button" onClick={addDistricts} className="btn btn-primary">Add Districts</button>}
                   
                    {/* <button type="button" onClick={deleteDetails} className="btn btn-primary">Delete Districts</button> */}
                </form>
            </div>
            <br />
            <div className="table">
                <table border="1">
                    <thead>
                        <tr>
                        <th>Id</th>    
                        <th>DistrictName</th>
                        <th>Constituency</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dtsName.map((val,i)=>{
                            return <tr key={i}>
                                <td >{val.id}</td>
                                <td >{val.districtName}</td>
                                <td >{val.constituency}</td>
                                <td><button className='btn btn-warning' onClick={()=>{editDistrictValues(val)}}>Edit</button></td>
                                <td><button className='btn btn-danger' onClick={()=>{deleteDetails(val)}}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    </div>;
};
