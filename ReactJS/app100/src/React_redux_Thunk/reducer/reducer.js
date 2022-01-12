
import { GET_ALL_POSTS } from "../actiontypes";
const defaultState = {
    posts: {}
}
const reducerRedux = (state = defaultState, action) => {
    switch (action.type) {
        case GET_ALL_POSTS:
            return action.payload


        default:
            return state.posts
    }
}
export default reducerRedux