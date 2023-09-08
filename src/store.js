import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import postReducer from "./reducers/post.js";
import { pageApi } from "./reducers/PageAPI.js";


const store = configureStore({
reducer:{
    post: postReducer,
    [pageApi.reducerPath]:pageApi.reducer

},
middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(pageApi.middleware)
})

setupListeners(store.dispatch);
export default store;