import { baseApi } from "../baseApi/baseApi";



const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => ({
                url: "/user",
                method: "GET",
            }),
            providesTags: ["users"],
        }),
        getSingleUser: builder.query({
            query: ({ userId }) => ({
                url: `/user/${userId}`,
                method: "GET",
            }),
            providesTags: ["users"],
        }),
        updateUser: builder.mutation({
            query: ({ userId, data }) => {
                return {
                    url: `/user/${userId}`,
                    method: "GET" ,
                    body: data,
                }
            },
            invalidatesTags: ["users"],
        }),
        paymentVerify: builder.mutation({
            query: ({ payment }) => {
                return {
                    url: '/user/payment',
                    method: "POST" ,
                    body: payment,
                }
            },
        }),       
    }),
});

export const { 
    useGetAllUserQuery,
    useGetSingleUserQuery,
    useUpdateUserMutation,
    usePaymentVerifyMutation,


} = userApi;