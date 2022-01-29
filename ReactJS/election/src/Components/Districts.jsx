import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const Districts = () => {
    let navigate = useNavigate();

    const [places, setPlaces] = useState("");
    // const [searchPlaces, setsearchPlaces] = useState({});
    const [enteredValue, setEnteredValue] = useState([])
    const [loggedIn, setloggedIn] = useState(false);
    useEffect(() => {
        let users = JSON.parse(localStorage.getItem("loggedInUser"))
        if (users) {
            setloggedIn(true)
            navigate("/");
        }
    }, []);

    const submitPlace = () => {
        console.log(places);
        if (loggedIn) {
            axios.get("http://localhost:3000/districts").then((res) => {
                console.log(res.data)
                let findPlace = res.data.find(place => place.constituency.indexOf(places) > -1)
                setEnteredValue(findPlace)
                // console.log(findPlace);
            })
        } else {
            alert("Please Login to See the Results")
            navigate("/login");
        }

    }
    return <div>
        {/* <h2>hello</h2> */}
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Enter Assembly Constituency</label>
                            <input type="email" className="form-control" value={places} onChange={(e) => { setPlaces(e.target.value) }} aria-describedby="emailHelp" />
                        </div>

                        <button type="button" onClick={submitPlace} className="btn btn-primary">Find Districts</button>
                      

                    </form>
                </div>
                {console.log(enteredValue)}
                {enteredValue.districtName && <div className="col-6">
                    {/* <h4>Districts Name : {enteredValue.map((val) => {
                        <li>{val.districtName}</li>
                    })}</h4> */}
                    <h4>Districts Name : {enteredValue.districtName}</h4>
                </div>}
            </div>
        </div>
    </div>;
};
