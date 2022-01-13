import React from 'react'
import { GET_ALL_COMMENTS } from './actiontype5'

const defaultState={
    comments:{}
}
export const reducer5 = (state=defaultState,action) => {
   switch (action.type) {
       case GET_ALL_COMMENTS:
           return action.payload
       default:
           return state
   }
}
