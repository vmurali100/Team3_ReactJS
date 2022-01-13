import React from 'react'
import { GET_ALL_POSTS } from './actiontype6'

const defaultState={
    posts:{}
}
export const reducer6 = (state=defaultState,action) => {
   switch (action.type) {
       case GET_ALL_POSTS:
           return action.payload
       default:
           return state
   }
}