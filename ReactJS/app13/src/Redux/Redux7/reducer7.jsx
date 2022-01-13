import React from 'react'
import { GET_ALL_USERSTORE } from './actiontype7'

const defaultState={
    users:{}
}
export const reducer7 = (state=defaultState,action) => {
   switch (action.type) {
       case GET_ALL_USERSTORE:
           return action.payload
       default:
           return state
   }
}
