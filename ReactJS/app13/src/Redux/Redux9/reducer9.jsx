import React from 'react'
import { GET_ALL_PRODUCTS } from './actiontype9'
const defaultState={
    products:{}
}
export const reducer9 = (state=defaultState,action) => {
   switch (action.type) {
       case GET_ALL_PRODUCTS:
           return action.payload
       default:
           return state
   }
}
