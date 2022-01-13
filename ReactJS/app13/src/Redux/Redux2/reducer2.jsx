import React from 'react'
import { GET_ALL_TODOS } from './actionTypes';
const defaultState={
    todos:{}
}
export const reducer2 = (state=defaultState,action) => {
    switch (action.type) {
        case GET_ALL_TODOS:
           return action.payload 
            
    
        default:
           return state
    }
}
