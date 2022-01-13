import React from 'react'
import { GET_ALL_ALBUM } from './actiontype3'

const defaultState={
    albums:{}
}
export const reducer4 = (state=defaultState,action) => {
   switch (action.type) {
       case GET_ALL_ALBUM:
           return action.payload
       default:
           return state
   }
}