import axios from "axios"
import { GET_ALL_SPORTS } from "./actionType";

export function getAllSportsAction(sport) {
    return(dispatch)=>{                       
        var options = {
            method: 'GET',
            url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
            params: {Category: 'soccer'},
            headers: {
              'x-rapidapi-host': 'livescore6.p.rapidapi.com',
              'x-rapidapi-key': '9da908f912msh28817ece3423a0ep174d9cjsndc26fbaeb6db'
            }
          };
          axios.request(options).then((res)=>{
            dispatch({
                type:GET_ALL_SPORTS,
                payload:res.data
            })
          })
    }
}