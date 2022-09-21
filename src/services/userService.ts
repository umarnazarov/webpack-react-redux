import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com"
    }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], any>({
            query: () => ({
                url: '/posts'
            })
        })
    })
})