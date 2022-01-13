import React from 'react'
import { GET_ALL_CARTS } from './actiontype8'

const defaultState={
    carts:{}
}
export const reducer8 = (state=defaultState,action) => {
   switch (action.type) {
       case GET_ALL_CARTS:
           return action.payload
       default:
           return state
   }
}
