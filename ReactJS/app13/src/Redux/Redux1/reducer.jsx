import React from 'react'
import { GET_ALL_USER } from './actiontypes'
const defaultState={
    users:{}
}
export const reducer = (state=defaultState,action) => {
   switch (action.type) {
       case GET_ALL_USER:
           return action.payload
       default:
           return state
   }
}
