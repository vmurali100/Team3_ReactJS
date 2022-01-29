import axios from 'axios';
import React, { useState } from 'react';

export const DistrctsDetails = () => {
    const [dtName, setdistrictName] = useState({
        districtName: "",
        constituency: [],
    });
    const [dtsName, showdistName] = useState([])
    const handleValues = (e) => {
        let newDistrictName = { ...dtName }
        newDistrictName[e.target.name] = e.target.value

        setdistrictName(newDistrictName)
    }
    const addDistricts = () => {
        let newDst = [...dtsName]
        newDst.push(dtName)
        console.log(newDst);
        axios.post("http://localhost:3000/districts", dtName).then((res) => {
            console.log(res.data);
        })
        showdistName(newDst)

    }
    return <div className='container'>
        <div className="row">
            <div className="col-6">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter Districts</label>
                        <input type="email" className="form-control" name='districtName' value={dtName.districtName} onChange={(e) => { handleValues(e) }} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter Assembly Constituency</label>
                        <input type="email" className="form-control" name='constituency' value={dtName.constituency} onChange={(e) => { handleValues(e) }} aria-describedby="emailHelp" />
                    </div>

                    <button type="button" onClick={addDistricts} className="btn btn-primary">Add Districts</button>
                </form>
            </div>
        </div>

    </div>;
};
