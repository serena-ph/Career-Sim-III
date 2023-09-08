import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/post.js";

const store = configureStore({
reducer:{
    post: postReducer,
    pageApi :""

},
middleware:()=>{}
})

export default store;