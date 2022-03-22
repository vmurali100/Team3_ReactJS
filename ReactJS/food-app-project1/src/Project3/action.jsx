import { GET_ALL_DISTRICTS} from "./actionTypes";
import axios from 'axios';

export const getAllDistrictsAction = () => {
    return async (dispatch) => {
        let allDistricts = await axios.get("http://localhost:3000/districts")
        console.log(allDistricts.data);
        dispatch({
            type: GET_ALL_DISTRICTS,
            payload: allDistricts.data
        })
    }
}
export const deleteDistrictsAction = (dist) => {
    return async (dispatch) => {
        axios.delete("http://localhost:3000/districts/" + dist.id).then(() => {
            dispatch(getAllDistrictsAction())
        })
    }
}
export const updateDistrictsAction = (dist) => {
    return async (dispatch) => {
        axios.post("http://localhost:3000/districts/" + dist).then(() => {
            dispatch(getAllDistrictsAction())
        })
    }
}

export const addDistrictsAction = (dist) => {
    return async (dispatch) => {
        axios.post("http://localhost:3000/districts/", dist).then(() => {
            dispatch(getAllDistrictsAction())
        })
    }
}


export const addConstituenciesAction = (dist) => {
    return async (dispatch) => {
        axios.post("http://localhost:3000/districts/", dist).then(() => {
            dispatch(getAllDistrictsAction())
        })
    }
}