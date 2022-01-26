import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
export const Persondetails = () => {
    // {
    //     "persons":[
    //         {
    //             "fNAme":"Abi",
    //             "lName":"M",
    //             "age":"24",
    //             "gender":"female"
    //         },
    //         {
    //             "fNAme":"Lokesh",
    //             "lName":"Kumar",
    //             "age":"24",
    //             "gender":"Male"
    //         },
    //         {
    //             "fNAme":"Harish",
    //             "lName":"Kumar",
    //             "age":"24",
    //             "gender":"Male"
    //         },
    //         {
    //             "fNAme":"Chandru",
    //             "lName":"Kumar",
    //             "age":"24",
    //             "gender":"Male"
    //         }
    
    //     ]
    // }
    const [person, setperson] = useState({});
    let params=useParams()
    // console.log("params",params);
    // console.log(allPersons);
    useEffect(() => {
       
        let allPersons=JSON.parse(localStorage.getItem("persons"))
        var seletedperson=allPersons.find((per)=>
             per.fNAme == params.persondetails
        )
        setperson(seletedperson)
    }, []);
    
   
  return <div>
      <h2>PersonDetails Component</h2>
      <ul>
         <li>First Name : {person.fNAme}</li>
         <li>Last Name : {person.lName}</li>
         <li>Age : {person.age}</li>
         <li>Gender : {person.gender}</li>
      </ul>
  </div>;
};
