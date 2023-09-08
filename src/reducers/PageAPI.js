import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const pageApi = createApi ({
    reducerPath: 'pageApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://strangers-things.herokuapp.com/api/2307-FSA-ET-WEB-FT-SF/'}),
    endpoints: (builder)=>({
        getPost: builder.query({
            query: ()=> 'posts'

        }), 
    })
})

export const {useGetPostQuery} = pageApi;