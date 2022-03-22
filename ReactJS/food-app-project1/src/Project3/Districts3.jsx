import React from 'react';
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addConstituenciesAction, addDistrictsAction, deleteDistrictsAction, getAllDistrictsAction} from './action';

const Districts3 = ({ districts, getAllDistricts, deleteDistricts, addDistricts }) => {
  const [alldistricts, setalldistricts] = useState([]);
  const [isAdd, setisAdd] = useState(false);
  const [isAddContiency, setisAddContiency] = useState([]);
  const [districtObj, setdistrictObj] = useState({
    constituencies: [],
    districtName: "",
    isAddCont: false
  });

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllDistricts())
  }, [])

  useEffect(() => {
    setalldistricts(districts)
    console.log(districts)
  }, [districts])

  const handleConstiency = (dist, i) => {
    let allDistricts = [...districts]
    let newDist = { ...dist }
    newDist.isAddCont = !newDist.isAddCont
    allDistricts[i] = newDist
    setalldistricts(allDistricts)
  }
  const getConstituencies = (dist) => {
    return <div>
      {dist.constituencies.map((con, i) => {
        return <p key={i}>{con}</p>
      })}
      {dist.isAddCont && (
        <div className='contiency'>
          <input type="text" name='' id='' />
          <button className="btn btn-primary m-2" onClick={addConstitency(dist)}>add constiency</button>
        </div>
      )}
    </div>
  }
const addConstitency=(dist)=>{
 console.log(dist)
 let constituencies = []
 dist.constituencies.push(constituencies)
console.log(constituencies)
}

  return (
    <div>
      <p>iam from districts</p>
      <div>
        <button onClick={() => { setisAdd(!isAdd) }} className="btn btn-primary">Add Districts</button>
      </div>

      {!isAdd && alldistricts ?
        (
          <div className="container">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">districts</th>
                  <th scope="col">constituencies</th>
                  <th scope="col">delete</th>
                  <th scope="col">edit</th>
                </tr>
              </thead>
              <tbody>
                {alldistricts.map((dist, i) => {
                  return <tr>
                    <td>{i + 1}</td>
                    <td>{dist.districtName}</td>
                    <td>{getConstituencies(dist)}</td>
                    <td><button onClick={() => { dispatch(deleteDistricts(dist)) }} className="btn btn-danger">delete</button></td>
                    <td><button onClick={() => { handleConstiency(dist, i) }} className="btn btn-warning">edit</button></td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        )
        :
        (
          <div>
            <input type="text" value={districtObj.districtName} onChange={(e) => {
              let obj = { ...districtObj }
              obj.districtName = e.target.value
              setdistrictObj(obj)
            }} />
            <button onClick={() => {
              dispatch(addDistricts(districtObj))
              setisAdd(!isAdd)
            }}>add</button>
          </div>
        )
      }

    </div>
  )
};
const stateMapsToProps = (state) => {
  return { districts: state }
}
const mapDispatchToprops = () => {
  return {
    getAllDistricts: getAllDistrictsAction,
    deleteDistricts: deleteDistrictsAction,
    addDistricts:addDistrictsAction,
    addConstituencies:addConstituenciesAction
  }
}
export default connect(stateMapsToProps, mapDispatchToprops)(Districts3)
