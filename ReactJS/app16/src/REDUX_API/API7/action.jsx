import axios from "axios"
import { GET_ALL_PRODUCTS } from "./actionType";

export function getAllProductsAction(){
    return(dispatch)=>{
       var options = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/v2/auto-complete',
  params: {
    q: 'bikini top',
    store: 'US',
    country: 'US',
    currency: 'USD',
    sizeSchema: 'US',
    lang: 'en-US'
  },
  headers: {
    'x-rapidapi-host': 'asos2.p.rapidapi.com',
    'x-rapidapi-key': 'e573b1afa9msh40764b4aa9d254ap1bd136jsnc9a6f52dd13d'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
dispatch({
  type:GET_ALL_PRODUCTS,
  payload:response.data
})
}
}