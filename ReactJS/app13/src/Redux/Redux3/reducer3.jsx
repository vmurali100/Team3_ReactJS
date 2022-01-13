import React from 'react'
import { GET_ALL_PHOTOS } from './actiontype3'

const defaultState={
    photos:{}
}
export const reducer3 = (state=defaultState,action) => {
   switch (action.type) {
       case GET_ALL_PHOTOS:
           return action.payload
       default:
           return state
   }
}
