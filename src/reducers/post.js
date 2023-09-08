import { createSlice} from "@reduxjs/toolkit";

const initialState =[];

const postSlice =  createSlice({
    name: "post",
    initialState,
    reducers:{
        addPost:(state,action)=>{
        state.push(action.payload);
        },
        deletePost:(state,action)=>{
            state.splice(action.payload,1);
            },
    }
})

export const {addPost, deletePost}= postSlice.actions;
export default postSlice.reducer;
