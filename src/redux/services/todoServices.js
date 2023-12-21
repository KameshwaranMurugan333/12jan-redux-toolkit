import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoService = createApi({
    reducerPath: 'todo',
    baseQuery: fetchBaseQuery({ baseUrl: "https://657fb8876ae0629a3f538d75.mockapi.io/", }),
    endpoints: (builder) => ({
        // To get all todos
        getAllTodos: builder.query({
            query: () => ({
                url: "todos",
                method: "GET"
            }),
        }),
    }),
});

export const { useGetAllTodosQuery, useLazyGetAllTodosQuery } = todoService;